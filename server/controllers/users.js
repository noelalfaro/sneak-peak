import { pool } from "../config/database.js";

const getUser = async (req, res) => {
	try {
		// console.log(req.user.username);
		const username = req.params.username;
		// console.log(req.params.username);
		const results = await pool.query(
			"SELECT * FROM users WHERE username = $1",
			[username]
		);
		// console.log(username);
		res.status(200).json(results.rows[0]);
	} catch (error) {
		res.status(409).json({ error: error.message });
	}
};

export default {
	getUser,
};
