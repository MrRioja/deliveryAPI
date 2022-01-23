import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Salve" });
});

app.listen(process.env.PORT_APP, () =>
  console.log(`🔥 Server is running on port ${process.env.PORT_APP}`)
);
