const express = require("express");

const app = express();

// accept all json data
app.use(express.json());

// routes
app.get("/menu", (req, res) =>
  res.json({
    items: ["thali", "biryani"],
  }),
);

app.post("/order", (req, res) =>
  res.status(200).json({
    status: "received",
    order,
  }),
);
