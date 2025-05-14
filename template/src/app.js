import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./utils/Passport.js";

const app = express();

// cross origin use case  for communication with frontend they can be restricted
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Express can accept json and what size it is set 16kb here
app.use(
  express.json({
    limit: "16kb",
  })
);

// Giving values in the url , extended means nested values and size limit
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// For storing the files received by the server
app.use(express.static("public"));

// To access the cookies and set cookies on user's browser
app.use(cookieParser());

// Stores user sessions (IDs) via cookies
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
}));

// Boots up Passport and attaches methods to req
app.use(passport.initialize());

// Enables session-based login state tracking
app.use(passport.session());

// routes import
import userRouter from "./routes/user.route.js";
import oauthRouter from "./routes/oauth.route.js";

// route declaration
app.use('/auth', oauthRouter);
app.use("/api/v1/users", userRouter);

export { app };
