
 export const ormconfigLocal = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    __dirname +"/../../../entities/**/*.entity.{js,ts}"
  ],
  migrations: [
    __dirname+'/../../../migrations/*.{js,ts}'
    ],
  seeds: [
    __dirname+'/../../../../migrations/seeders/*.seed.{js,ts}'
  ],
  factories: [
    __dirname+'/../../../migrations/factories/*.factory.{js,ts}'
  ],
  cli: {
    entitiesDir: __dirname +"/../../../entities",
    migrationsDir: __dirname +"/../../../migrations",
    seedersDir: __dirname +"/../../../migrations/seeders",
    factoriesDir: __dirname +"/../../../migrations/factories",
  },
}