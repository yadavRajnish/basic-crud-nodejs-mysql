import mysql2 from "mysql2";

const connection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "basic_crud",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
