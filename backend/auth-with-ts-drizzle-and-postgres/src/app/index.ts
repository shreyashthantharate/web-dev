import express from "express";
import type { Express } from "express";

export function createsApplication(): Express {
  const app = express();

  app.get("/", (req, res) => {
    return res.json({ message: "Welcome to auth service" });
  });

  return app;
}
