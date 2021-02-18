import { Task } from "../../task/dto/getter/task.entity";
import { User } from "../../user/dto/getters/user.entity";

 export default {
  name: 'default',
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  entities: [
      User,Task
  ],
  migrations: ['./src/migrations/**/*.ts'],
  cli: {
      migrationsDir: './src/migrations',
  },
}