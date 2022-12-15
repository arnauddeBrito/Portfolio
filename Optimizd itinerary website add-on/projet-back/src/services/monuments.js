const { query } = require("./db");

const getAllMonuments = async () => {
  return (await query("SELECT * FROM monuments")).rows;
};

const getAllMonumentsByType = async (type) => {
  return (await query("SELECT * FROM monuments WHERE type = $1", [type])).rows;
};

const deleteUser = async (id) => {
  const res = await query("DELETE FROM users WHERE id = $1", [id]);
  if (res.rowCount === 0) throw new Error("No rows delete");
};

module.exports = {
  getAllMonuments,
  getAllMonumentsByType,
  deleteUser,
};
