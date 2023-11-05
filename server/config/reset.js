import { pool } from "./database.js";
import "./dotenv.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

const currentPath = fileURLToPath(import.meta.url);
const shoeFile = fs.readFileSync(
  path.join(dirname(currentPath), "../config/data/data.json")
);

const shoesData = JSON.parse(shoeFile);

const createShoesTable = async () => {
  const createShoesTableQuery = `

  CREATE TABLE IF NOT EXISTS shoes (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    brand varchar(100) NOT NULL,
    color varchar(100) NOT NULL,
    description varchar(500) NOT NULL,
    material varchar (100) NOT NULL,
    technologies varchar (100) NOT NULL,
    sizing_recommendations varchar (100) NOT NULL,
    img_URL text NOT NULL
    );`;

  try {
    const res = await pool.query(createShoesTableQuery);
    console.log("🎉 Shoes table created successfully");
  } catch (error) {
    console.log("⚠️ error creating shoes table", error);
  }
};

const createUsersTable = async () => {
  const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    githubid integer NOT NULL,
    role varchar (100) NOT NULL,
    username varchar(100) NOT NULL,
    avatarurl varchar(500) NOT NULL,
    accesstoken varchar(500) NOT NULL
    );
    `;

  try {
    const res = await pool.query(createUserTableQuery);
    console.log("🎉 users table created successfully");
  } catch (error) {
    console.error("⚠️ error creating users table", error);
  }
};

const createUsersShoesTable = async () => {
  const createUsersShoesTableQuery = `
    CREATE TABLE IF NOT EXISTS users_shoes (
      shoe_id int NOT NULL,
      user_id int NOT NULL,
      PRIMARY KEY (shoe_id, user_id),
      FOREIGN KEY (shoe_id) REFERENCES shoes(id) ON UPDATE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
    );
  `;

  try {
    const res = await pool.query(createUsersShoesTableQuery);
    console.log("🎉 users_shoes table created successfully");
  } catch (error) {
    console.error("⚠️ error creating users_shoes table", error);
  }
};

const createUpvotesTable = async () => {
  const createUpvotesTableQuery = `
     CREATE TABLE IF NOT EXISTS upvotes (
        id serial PRIMARY KEY,
        shoe_id int NOT NULL,
        user_id int NOT NULL,
        FOREIGN KEY (shoe_id) REFERENCES shoes(id) ON UPDATE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
     )`;

  try {
    const res = await pool.query(createUpvotesTableQuery);
    console.log("🎉 upvotes table created successfully");
  } catch (error) {
    console.log("⚠️ error creating upvotes table", error);
  }
};

const isShoesTableEmpty = async () => {
  try {
    const result = await pool.query("SELECT * FROM shoes LIMIT 1");
    return result.rowCount === 0;
  } catch (error) {
    console.error("⚠️ error checking if shoes table is empty", error);
    return false;
  }
};

const seedShoesTable = async () => {
  const isTableEmpty = await isShoesTableEmpty();
  if (isTableEmpty) {
    await createShoesTable();
    shoesData.forEach((shoe) => {
      const insertQuery = {
        text: `INSERT INTO shoes ( name, brand, color, description, material, technologies, sizing_recommendations, img_URL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      };

      const values = [
        shoe.name,
        shoe.brand,
        shoe.color,
        shoe.description,
        shoe.material,
        shoe.technologies,
        shoe.sizing_recommendations,
        shoe.img_URL,
      ];

      try {
        pool.query(insertQuery, values);
        console.log(`✅ ${shoe.name} added successfully`);
      } catch (error) {
        console.log("⚠️ error inserting shoe", error);
      }
    });
  } else {
    console.log("👟 Shoes table is not empty; data already inserted.");
  }
};

seedShoesTable();
createUsersTable();
createUsersShoesTable();
createUpvotesTable();
