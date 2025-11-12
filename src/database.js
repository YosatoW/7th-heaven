// /src/database.js
require('dotenv/config');
const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');
const schema = require('./db/schema'); // schema.js muss module.exports verwenden

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

module.exports = { db };
