const axios = require('axios');

function convertDateToUsableString(date) {
  const [d, m, y] = date
    .toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })
    .split('/');
  return `${y}-${m}-${d}`;
}

module.exports = async function index(req, res) {
  const today = convertDateToUsableString(new Date());
  const yesterday = convertDateToUsableString(
    new Date(Date.now() - 1000 * 60 * 60 * 24)
  );

  try {
    let { data } = await axios.get(
      `https://apitempo.inmet.gov.br/estacao/${yesterday}/${today}/A553`
    );
    res.json(data);
  } catch (error) {
    console.error('error', error);
    res.status(400).send(error);
  }
};
