import { pool } from "../config/database.js";

const createShoe = async (req, res) => {
  try {
    const {
      name,
      brand,
      color,
      description,
      material,
      technologies,
      sizing_recommendations,
      img_URL,
    } = req.body;

    const results = await pool.query(
      `INSERT INTO shoes (name, brand, color, description, material, technologies, sizing_recommendations, img_URL)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [
        name,
        brand,
        color,
        description,
        material,
        technologies,
        sizing_recommendations,
        img_URL,
      ]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getShoes = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM shoes ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getShoe = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("SELECT * FROM shoes WHERE id = $1", [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateShoe = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {
      name,
      brand,
      color,
      description,
      material,
      technologies,
      sizing_recommendations,
      img_URL,
    } = req.body;
    const results = await pool.query(
      `UPDATE shoes
      SET name = $1, brand = $2, color = $3, description = $4, material = $5, technologies = $6, sizing_recommendations= $7, img_URL = $8
      WHERE id = $9`,
      [
        name,
        brand,
        color,
        description,
        material,
        technologies,
        sizing_recommendations,
        img_URL,
        id,
      ]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteShoe = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const results = await pool.query("DELETE FROM shoes WHERE id = $1", [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createShoe,
  getShoes,
  getShoe,
  updateShoe,
  deleteShoe,
};
