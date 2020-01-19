const axios = require('axios');

const api = axios.create({
  baseURL: 'http://randomprofile.com/api/api.php'
});

module.exports = api;