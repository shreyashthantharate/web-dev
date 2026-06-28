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

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const menuRes = await fetch(`${base}/menu`);
        menuData = await menuRes.json();
        console.log("GET /menu", JSON.stringify(menuData));

        console.log("+++++++++++++++++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=iryani&limit=5`);
        const searchData = await searchRes.json();
        console.log("GET /search", JSON.stringify(searchData));

        console.log("+++++++++++++++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("POST /menuItem", JSON.stringify(menuItemData));

        console.log("+++++++++++++++++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              dish: "biryani",
              quantity: 2,
            }),
          },
        });
        const orderData = await orderRes.json();
        console.log("POST /order", JSON.stringify(orderData));

        console.log("+++++++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(`Error: ${error}`);
      }
      server.close(() => {
        console.log("Block 1 served...");
        // resolve();
      });
    });
  });
}

async function main() {
  await block_1_basicServer();

  process.exit(0);
}

main();
