import express from "express";
// import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import cardRouter from "./routes/cardRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;
const path = "/app";

// macht den Pfad '/app/public' statisch, somit kann man auch ohne deren
// Angabe darauf zugreifen.
// Zugriff auf Karte mit bsp. localhost:3000/images/blue.png
app.use(express.static(join(path, "public")));

// Erlaubt alle CORS Anfragen
app.use(cors())

// Middleware welche das parsen von JSON Requests ermöglicht
app.use(express.json());
app.use("/api", cardRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Example App listening on port: " + port);
});
