import { DataSource, DataSourceOptions } from 'typeorm';
import { Magazine } from './entity/magazine.entity';

const config: DataSourceOptions = {
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    Magazine,
  ],
  logging: true,
  synchronize: false,
};

export default new DataSource(config);
