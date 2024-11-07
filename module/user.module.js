import db from "../database/db.js";

// Get all users
export const GetUsers = async () => {
  try {
    const [rows] = await db.promise().query(`SELECT * FROM users;`);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    throw new Error("Error fetching users: " + err.message);
  }
};

// Create a new user
export const CreateUser = async (name, address, country) => {
  try {
    const [{ insertId }] = await db
      .promise()
      .query(`INSERT INTO users (name, address, country) VALUES (?, ?, ?)`, [
        name,
        address,
        country,
      ]);
    const [[newUser]] = await db
      .promise()
      .query(`select * from users where id =?`, insertId);
    return newUser;
  } catch (err) {
    throw new Error("Error creating user: " + err.message);
  }
};

// Get user by ID
export const GetUserById = async id => {
  try {
    const [rows] = await db
      .promise()
      .query(`SELECT * FROM users WHERE id = ?`, [id]);
    return rows.length ? rows[0] : null;
  } catch (err) {
    throw new Error("Error fetching user by ID: " + err.message);
  }
};

// Update a user by ID
export const UpdateUser = async (id, name, address, country) => {
  try {
    await db
      .promise()
      .query(
        `UPDATE users SET name = ?, address = ?, country = ? WHERE id = ?`,
        [name, address, country, id]
      );

    const [[updatedUser]] = await db
      .promise()
      .query(`select * from users WHERE id =?`, [id]);

    console.log("updatedUser", updatedUser);

    return updatedUser;
  } catch (err) {
    throw new Error("Error updating user: " + err.message);
  }
};

// Delete a user by ID
export const DeleteUser = async id => {
  try {
    const [result] = await db
      .promise()
      .query(`DELETE FROM users WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  } catch (err) {
    throw new Error("Error deleting user: " + err.message);
  }
};
