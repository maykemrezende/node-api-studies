import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./infra/entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "investidor",
    password: "investidor",
    database: "investidor",
    synchronize: true,
    logging: false,
    entities: [__dirname + '/src/infra/entity/*{.js,.ts}'],
    migrations: [
        "src/infra/migration/**/*.ts",
        "src/infra/migration/**/*.js"
    ],
    subscribers: [],
})
