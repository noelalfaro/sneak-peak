import express from "express";
import cors from "cors";
import shoeRoutes from "./routes/shoes.js";
import session from "express-session";
import passport from "passport";
import { Github } from "./config/auth.js";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(
	session({
		secret: "sneak-peak",
		resave: false,
		saveUninitialized: true,
	})
);

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST,PUT,DELETE,PATCH",
		credentials: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(Github);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

app.get("/", (req, res) => {
	res.redirect(`http://localhost:5173/dashboard`);
});

app.use("/api/shoes", shoeRoutes);
app.use("/auth", authRoutes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
