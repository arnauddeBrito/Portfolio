const { Client } = require("pg");

const query = async (sql, params) => {
  const client = new Client();
  await client.connect();
  const res = await client.query(sql, params);
  await client.end();
  return { rowCount: res.rowCount, rows: res.rows };
};

module.exports = {
  query,
};
