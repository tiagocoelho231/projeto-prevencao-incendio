const axios = require('axios');

function convertDateToUsableString(date) {
  const [m, d, y] = date
    .toLocaleDateString('en-US', {
      timeZone: 'America/Sao_Paulo'
    })
    .split('/');
  return `${y}-${m}-${d}`;
}

module.exports = async function index(req, res) {
  const today = convertDateToUsableString(new Date());
  const beginDate = convertDateToUsableString(
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 9) // 30 days
  );

  try {
    let { data } = await axios.get(
      `https://apitempo.inmet.gov.br/estacao/${beginDate}/${today}/A553`
    );
    res.json(parseData(data));
  } catch (error) {
    console.error('error', error);
    res.status(400).send(error);
  }
};

function getTensaoMaximaVapor(tempAr) {
  return 6.108 * Math.exp((17.3 * Number(tempAr)) / (Number(tempAr) + 237.3));
}

function getTensaoRealVapor(tempAr, umidRel) {
  return (umidRel / 100) * getTensaoMaximaVapor(tempAr);
}

function getIndiceInflamabilidade({ TEM_INS: tempAr, UMD_INS: umidRel }) {
  const deficitSaturacao =
    getTensaoMaximaVapor(tempAr) - getTensaoRealVapor(tempAr, umidRel);
  const indiceInflamabilidade = deficitSaturacao * tempAr;
  return indiceInflamabilidade;
}

function somatorioInflamabilidade(chuva, risco, riscoDiario) {
  if (!chuva) {
    chuva = 0;
  }
  chuva = Number(chuva);
  if (chuva < 2) {
    riscoDiario += risco;
  } else if (chuva < 5) {
    riscoDiario = riscoDiario * 0.75 + risco;
  } else if (chuva < 8) {
    riscoDiario = riscoDiario * 0.5 + risco;
  } else if (chuva < 10) {
    riscoDiario = risco;
  } else {
    riscoDiario = 0;
  }
  console.log('riscoDiario', riscoDiario);
  return riscoDiario;
}

function risco(indice) {
  if (indice < 301) {
    return 'Nenhum';
  } else if (indice < 501) {
    return 'Baixo';
  } else if (indice < 1001) {
    return 'Médio';
  } else if (indice < 4001) {
    return 'Alto';
  } else {
    return 'Muito alto';
  }
}

function riscoSomado(data) {
  let riscoAcumulado = 0;
  for (day of data) {
    const hour = day.length >= 16 ? day[16] : day[day.length - 1];
    riscoAcumulado = somatorioInflamabilidade(
      hour.CHUVA,
      getIndiceInflamabilidade(hour),
      riscoAcumulado
    );
  }

  return risco(riscoAcumulado);
}

function parseData(apiData) {
  let i = 0,
    splitData = [];
  while (apiData.length > 0) {
    splitData.push(apiData.splice(i * 24, 24));
  }

  splitData[splitData.length - 1] = splitData[splitData.length - 1].filter(
    hour => hour.TEM_INS
  );

  const now =
    splitData[splitData.length - 1][splitData[splitData.length - 1].length - 1];

  const data = {
    fireRisk: riscoSomado(splitData),
    yesterdayFireRisk: riscoSomado(splitData.slice(0, splitData.length - 1)),
    temperature: now.TEM_INS,
    windSpeed: now.VEN_VEL,
    humidity: now.UMD_INS,
    pressure: now.PRE_INS
  };

  return data;
}
