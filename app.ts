import * as express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
