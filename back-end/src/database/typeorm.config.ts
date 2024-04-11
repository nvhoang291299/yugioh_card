import { registerAs } from "@nestjs/config"
import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
// import { getENVFile } from "src/config/env.config";
dotenvConfig({ path: [".env.host",".env.database"] });

const config: any = {
    type: process.env.MYSQL_TYPE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [ __dirname + '/../**/*.migrations{.ts,.js}',],
    synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);