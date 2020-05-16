require("dotenv").config();

module.exports = {
   type: process.env.DIALECT,
   host: process.env.HOST,
   port: process.env.DBPORT,
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: true,
   logging: true,
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
      entitiesDir: "/home/app/dist/database/models",
      migrationsDir: "/home/app/dist/database/migration",
      subscribersDir: "/home/app/dist/database/subscriber"
   }
}
