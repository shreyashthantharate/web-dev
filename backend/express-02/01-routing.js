const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    // filepath
    app.get("/files/*filepath", (req, res) => {
      const filepath = req.params.filepath;
      res.json({ filepath, type: "wildcard" });
    });

    const routes = {
      1: {
        id: 1,
        name: "Darar - Andhri Express",
        direction: "North",
      },

      2: {
        id: 2,
        name: "Bandra - Kurla Shuttle",
        direction: "East",
      },
    };

    let nextId = 3;

    // List all train
    app.get("/routes", (req, res) => {
      res.json(Object.values(routes));
    });

    // single route by id
    (app.get("/routes/:id"),
      (req, res) => {
        // const {id} = req.params;
        // const route = routes[id]

        const route = routes(req.params.id);
        if (!route)
          return res.status(404).json({ error: "No train on this id" });
        res.json(route);
      });

    app.post("/routes", (req, res) => {
      const newRoute = { id: nextId++, ...req.body };
      routes[newRoute.id] = newRoute;
      res.status(201).json(newRoute);
    });

    app.put("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({ error: "Something went wrong" });
      routes[id] = { id: Numberr(id), ...req.body };
    });

    app.patch("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({ error: "Something went wrong" });
      const { name } = req.body;
      routes[id] = { id: Number(id), name: name };
    });

    app.delete("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({ error: "Something went wrong" });
      delete routes[id];
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        // TODO
        const listRes = await fetch(`${base}/routes`);
        const listData = await listRes.json();

        console.log(`List data: ${listData}`);
        console.log("+++++++++++++++++++++++++++++++++++++");

        const createRes = await fetch(`${base}/routes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              name: "Colaba - Worli",
              diection: "South",
            }),
          },
        });
        const createdRes = await createRes.json();
        console.log(`Created data: ${createdRes}`);
        console.log("+++++++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(`Error: ${error}`);
      }
      server.close(() => {
        console.log("Block 1 served...");
        resolve();
      });
    });
  });
}

async function main() {
  await block_1_httpMethods();

  process.exit(0);
}

main();
