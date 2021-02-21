 export default {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  entities: ['../../**/*.entity.{js,ts}'],
  migrations: ['../../migrations/*.{js,ts}'],
  seeds: ['../../migrations/seeders/*.seed.{js,ts}'],
  factories: ['../../migrations/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: '../../migrations',
    seedersDir: '../../migrations/seeds',
    factoriesDir: '../../migrations/factories',
  },
}