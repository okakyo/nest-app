import { Task } from "../../entities/task/task.entity";
import { User } from "../../entities/user/user.entity";

 export default {
  name: 'default',
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  seeds: ['dist/migrations/seeders/*.seed.{js,ts}'],
  factories: ['dist/migrations/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: 'dist/migrations',
    entitiesDir: 'dist/entities',
    seedersDir: 'dist/migrations/seeds',
    factoriesDir: 'dist/migrations/factories',
  },
}