const api = require('../services/api');

module.exports = {
  async index(req, res) {

    await api.get(api.baseURL, {
      params: {
        countries: req.query.paises,
        fromAge: req.query.idadeInicial,
        toAge: req.query.idadeFinal,
        format: 'json'
      }
    }).then(response => {
      return res.json(response.data);
    }).catch(err => {
      // tratamento para não quebrar a aplicação
      res.status(err.status || 500).json({
        code: err.code || 500,
        message: err.message || STATUS_CODES[err.status],
      })
    });
  }
}