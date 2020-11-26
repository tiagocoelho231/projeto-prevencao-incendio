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
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 10) // 30 days
  );

  try {
    let { data: hourlyData } = await axios.get(
      `https://apitempo.inmet.gov.br/estacao/${beginDate}/${today}/A553`
    );
    let { data: daily } = await axios.get(
      `https://apitempo.inmet.gov.br/estacao/diaria/${beginDate}/${today}/A553`
    );
    let i = 0,
      hourly = [];
    while (hourlyData.length > 0) {
      hourly.push(hourlyData.splice(i * 24, 24));
    }

    res.json(parseData({ daily, hourly }));
  } catch (error) {
    console.error('error', error);
    res.status(400).send(error);
  }
};

function getTensaoMaximaVapor(tempAr) {
  return 6.112 * Math.exp((17.67 * Number(tempAr)) / (Number(tempAr) + 243.5));
}

function getTensaoRealVapor(tempAr, umidRel) {
  return (1 - umidRel / 100) * getTensaoMaximaVapor(tempAr);
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
  if (chuva <= 2) {
    riscoDiario += risco;
  } else if (chuva <= 5) {
    riscoDiario = riscoDiario * 0.75 + risco;
  } else if (chuva <= 8) {
    riscoDiario = riscoDiario * 0.5 + risco;
  } else if (chuva <= 10) {
    riscoDiario = risco;
  } else {
    riscoDiario = 0;
  }
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
  data.hourly.forEach((day, index) => {
    const hour = day.length >= 16 ? day[16] : day[day.length - 1];
    riscoAcumulado = somatorioInflamabilidade(
      data.daily[index].CHUVA,
      getIndiceInflamabilidade(hour),
      riscoAcumulado
    );
  });
  return risco(riscoAcumulado);
}

function parseData(apiData) {
  apiData.hourly[apiData.hourly.length - 1] = apiData.hourly[
    apiData.hourly.length - 1
  ].filter(hour => hour.TEM_INS);

  const now =
    apiData.hourly[apiData.hourly.length - 1][
      apiData.hourly[apiData.hourly.length - 1].length - 1
    ];

  const dataWithoutToday = {
    daily: apiData.daily.slice(0, apiData.daily.length - 1),
    hourly: apiData.hourly.slice(0, apiData.hourly.length - 1)
  };

  const data = {
    fireRisk: riscoSomado(apiData),
    yesterdayFireRisk: riscoSomado(dataWithoutToday),
    temperature: now.TEM_INS,
    windSpeed: now.VEN_VEL,
    humidity: now.UMD_INS,
    pressure: now.PRE_INS
  };

  return data;
}
