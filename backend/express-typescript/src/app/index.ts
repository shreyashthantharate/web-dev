import express from "express";
import type { Application } from "express";
import todoRouter from "./todo/routes.js";

export function createServerApplication() {
  const app = express();

  app.use(express.json());

  //#region //*========= Routes =============
  app.get("/", function (req, res) {
    return res.json({ message: "Hello ji kaise hooo..." });
  });

  app.get("/about", function (req, res) {
    return res.json({ message: "This is about page." });
  });

  app.use("/todos", todoRouter);

  //#endregion //*========= Routes =============

  return app;
}
