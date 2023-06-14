const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM tbl_account';
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
}