const express = require("express");

function block_1_basicServer() {
  return new Promise((req, res) => {
    const app = express();
    app.use(express.json());

    // get route
    app.get("/menu", (req, res) => {
      res.json({
        items: ["thali", "biryani"],
      });
    });

    // query param route
    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    // route params || path params
    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;

      res.json({
        item: id,
        price: 149,
      });
    });

    // post route
    app.post("/order", (req, res) => {
      const { order } = req.body;
      res.status(201).json({
        status: "received",
        order: order,
      });
    });
  });
}

async function main() {
  await block_1_basicServer();

  process.exit(0);
}

main();
