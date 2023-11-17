import express from "express";

import UsersController from "../controllers/users.js";

const router = express.Router();

router.get("/:username", UsersController.getUser);

export default router;
