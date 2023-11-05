import express from "express";

import ShoesController from "../controllers/shoes.js";

const router = express.Router();

router.get("/", ShoesController.getShoes);

export default router;
