import express from "express";
import getuser from "./route/user.route.js";
import db from "./database/db.js";

const app = express();

app.use(express.json());

db.getConnection((err, conn) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  } else {
    console.log("Database connected successfully!");
    conn.release();
  }
});

app.use("/api/user", getuser);

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
