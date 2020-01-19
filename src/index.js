const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const server = require('http').Server(app);

//evitar o crash em erros não tratados
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
});

//permitindo request de qualquer domínio
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333, function () {
  console.log("Express server listening on port %d", this.address().port);
});

module.exports = server;