 require("dotenv").config();

module.exports = {
   type: process.env.DIALECT,
   host: process.env.HOST,
   port: process.env.DBPORT,
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: false,
   logging: false,
   entities: [
      process.env.ENTITIES
   ],
   migrations: [
      process.env.MIGRATIONS
   ],
   subscribers: [
      process.env.SUBSCRIBERS
   ],
   migrationTableName: process.env.TABLE_NAME,
   cli: {
      entitiesDir: "src/database/models",
      migrationsDir: "src/database/migration",
      subscribersDir: "src/database/subscriber"
   }
}
