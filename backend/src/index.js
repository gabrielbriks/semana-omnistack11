const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*Para que os erros sejam retiornados de uma forma mais bacana, de uma forma mais tratavel para o nosso app
 */

app.listen(3333);
