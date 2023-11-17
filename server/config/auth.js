import GithubStrategy from "passport-github2";
import { pool } from "./database.js";
const options = {
	clientID: process.env.GITHUB_CLIENT_ID,
	clientSecret: process.env.GITHUB_CLIENT_SECRET,
};

const verify = async (accessToken, refreshToken, profile, callback) => {
	const {
		_json: { id, name, login, avatar_url, sneakersInLocker },
	} = profile;

	const userData = {
		githubId: id,
		username: login,
		avatarUrl: avatar_url,
		accessToken,
		sneakersInLocker: sneakersInLocker,
	};

	try {
		const results = await pool.query(
			"SELECT * FROM users WHERE username = $1",
			[userData.username]
		);

		// console.log(results);

		const user = results.rows[0];

		if (!user) {
			const results = await pool.query(
				"INSERT INTO users (githubid , username ,  role ,  avatarurl ,accesstoken, sneakersinlocker ) values( $1 , $2, $3, $4, $5, $6 )",
				[
					userData.githubId,
					userData.username,
					"newbie",
					userData.avatarUrl,
					userData.accessToken,
					userData.sneakersInLocker,
				]
			);
			const newUser = results.rows[0];
			return callback(null, newUser);
		}
		return callback(null, user);
	} catch (err) {
		return callback(err, null);
	}
};

export const Github = new GithubStrategy(options, verify);
