import GithubStrategy from "passport-github2";
import { pool} from './database.js'
const options = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  //  callbackURL: 'http://localhost:3001/auth/github/callback'
};

const verify = async (accessToken, refreshToken, profile, callback) => {
  const {
    _json: { id, name, login, avatar_url },
  } = profile;

  const userData = {
    githubId: id,
    username: login,
    avatarUrl: avatar_url,
    accessToken,
  };

  try {
    const results = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [userData.username]
    );

console.log(results);

    const user = results.rows[0];

    if (!user) {
      const results = await pool.query(
        "INSERT INTO users (githubid , username ,  role ,  avatarurl ,accesstoken ) values( $1 ,$2,$3,$4,$5 )",
        [
          userData.githubId,
          userData.username,
          "newbie",
          userData.avatarUrl,
          userData.accessToken,
        ]
      );
       const newUser= results.rows[0]
       return callback(null, newUser);
    }
       return callback(null, user);

  } catch (err) {

    return callback(err, null);}
};

export const Github = new GithubStrategy( options , verify)