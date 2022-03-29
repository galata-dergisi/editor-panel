import express from 'express';

const PORT: number = 3000;
const INTERFACE: string = '0.0.0.0';

const app: express.Application = express();

app.use((req: express.Request, res: express.Response) => {
  res.end('<h1>Hello World</h1>');
});

app.listen(PORT, INTERFACE, () => {
  console.log('App started listening on port', PORT);
  console.info(`Connect at http://localhost:${PORT}`);
});
