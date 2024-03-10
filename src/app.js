import express from "express";
// import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import cardRouter from "./routes/cardRoutes.js";
import cors from "cors";

export const app = express();
const port = 3000;
const path = "/app";

// Allows all CORS requests
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Creates a static path '/app/public' for easier access. Example: localhost:3000/images/blue.png
app.use(express.static(join(path, "public")));

// Middleware to allow JSON parsing
app.use(express.json());
app.use("/api", cardRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log("Example App listening on port: " + port);
  });
}
