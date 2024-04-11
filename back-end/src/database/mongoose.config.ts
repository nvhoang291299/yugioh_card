import { registerAs } from "@nestjs/config"
import { DataSource, DataSourceOptions, MongoClient } from "typeorm";
import { config as dotenvConfig } from 'dotenv';
import mongoose from "mongoose";
// import { getENVFile } from "src/config/env.config";
dotenvConfig({ path: [".env.host",".env.database"] });

export default registerAs('mongoose', () => ({
    createConnection: async () => {
    //   const mongoURL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;
    const mongoURL = `mongodb://127.0.0.1:27017/yugi_shop?directConnection=true`;
    return {
      uri: await mongoose.connect(mongoURL)
    }
    },
  }))
