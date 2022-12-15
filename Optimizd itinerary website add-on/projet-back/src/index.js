const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3001;

const axios = require("axios");

app.use(express.json());
app.use(cors());

require("dotenv").config();

const users = require("./services/monuments");

app.get("/api", async (req, res) => {
  res.send({
    message: "Hello World !",
  });
});

// En général on retourne toujours un JSON, car c'est ce qu'attende les clients
app.get("/api/monuments", async (req, res) => {
  res.send(await users.getAllMonuments());
});

app.get("/api/monuments/:type", async (req, res) => {
  res.send(await users.getAllMonumentsByType(req.params.type));
});

app.get("/api/citymapper/", async (req, res) => {
  try {
    res.send(
      (
        await axios.get(
          "https://api.external.citymapper.com/api/1/traveltimes",
          {
            params: {
              start: req.query.start,
              end: req.query.end,
            },
            headers: {
              "Citymapper-Partner-Key": "pikeQela9u4cYR9TtT4v0oKcuRE8bOfD",
              mode: "no-cors",
            },
          }
        )
      ).data
    );
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// app.delete("/api/users/delete", async (req, res) => {
//   try {
//     await users.deleteUser(req.query.id);
//     res.send({
//         message: "Deleted user"
//     });
//   } catch (error) {
//     res.status(400).send({
//       message: error.message,
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
