// /src/db/schema.js

const { pgTable, serial, varchar } = require("drizzle-orm/pg-core");

const newsletterTable = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique()
});

const contactTable = pgTable("contactaddress", {
  id: serial("id").primaryKey(),
  firstname: varchar("vorname", { length: 50 }).notNull(),
  lastname: varchar("nachname", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  tel: varchar("tel", { length: 20 }),
  address: varchar("adresse", { length: 255 }),
  plz: varchar("plz", { length: 10 }),
  city: varchar("ort", { length: 100 }),
  comments: varchar("Bemerkung", { length: 255 })
});

module.exports = {
  newsletterTable,
  contactTable
};

