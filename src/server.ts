import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT_APP, () =>
  console.log(`🔥 Server is running on port ${process.env.PORT_APP}`)
);
