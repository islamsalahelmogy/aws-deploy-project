import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
	username: config.username,
	password: config.password,
	database: config.database,
	port: config.dbport as unknown as number,
	host: config.host,
	dialect: "postgres",
	storage: ":memory:",
});
