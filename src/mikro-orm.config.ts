import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';

const config: Options<PostgreSqlDriver> = {
  driver: PostgreSqlDriver,
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '1234', // Your password
  dbName: 'taskapp', // Your database name
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  extensions: [Migrator], // Already there
  migrations: { // Add this block
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default config;