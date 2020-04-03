const constants = require('./constants.js');
module.exports = {
  oracleDBPool: {
	user: constants.ORACLEDB.ORA_DB_USER,
    password: constants.ORACLEDB.ORA_DB_PASSWORD,
    connectString: constants.ORACLEDB.ORA_DB_CONNECTION_STRING,
    poolMin: constants.ORACLEDB.ORA_DB_CONPOOL_MIN,
    poolMax: constants.ORACLEDB.ORA_DB_CONPOOL_MAX,
    poolIncrement: constants.ORACLEDB.ORA_DB_CONPOOL_INCREMENT
  },
  
  mySQLDBPool: {
	user: constants.MYSQLDB.MYSQL_USER,
    password: constants.MYSQLDB.MYSQL_PASSWORD,
    connectString: constants.MYSQLDB.MYSQL_CONNECTION_STRING,
    poolMin: constants.MYSQLDB.MYSQL_CONPOOL_MIN,
    poolMax: constants.MYSQLDB.MYSQL_CONPOOL_MAX
  }
};
