import pg from 'pg';
const { Pool } = pg;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, DBPORT } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: parseInt(DBPORT, 10),
  ssl: {
    require: true,
  },
});

const port = process.env.PORT || 3000;
export { pool, port };