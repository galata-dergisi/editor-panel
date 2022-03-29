import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import { Magazine } from './entity/magazine.entity';
import dataSource from './app-data-source';

const PORT: number = 3000;
const INTERFACE: string = '0.0.0.0';

async function demoRequest(req: Request, res: Response) {
  try {
    const magazines = await dataSource.getRepository(Magazine).find();
    res.json({ magazines });
  } catch (ex: any) {
    res.status(500).json({ error: ex?.message });
  }
}

async function main() {
  try {
    await dataSource.initialize();
    const app: Application = express();

    app.use(demoRequest);

    app.listen(PORT, INTERFACE, () => {
      console.log('App started listening on port', PORT);
      console.info(`Connect at http://localhost:${PORT}`);
    });
  } catch (ex) {
    console.trace(ex);
  }
}

main();
