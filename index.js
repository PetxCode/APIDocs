const express = require("express");
const port = 2345;
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerUIDocs = YAML.load("./app.yaml");

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerUIDocs));
app.use(express.json());
const users = [
  { id: 1, name: "Peter" },
  { id: 2, name: "Bukky" },
  { id: 3, name: "Kemi" },
  { id: 4, name: "Ndidi" }
];

app.get("/", (req, res) => {
  res.end("This is just a simple Docs for API 🚀");
});

app.get("/users", (req, res) => {
  res.status(200).json({ message: "🚀", data: users });
});

app.get("/user/:id", (req, res) => {
  const user = users.find((el) => el.id === parseInt(req.params.id));

  res.status(200).json({ message: "🚀", data: user });
});

app.post("/create", (req, res) => {
  const user = req.body;
  const createPost = [...users, user];
  res.status(201).json(createPost);
  // res.status(201).json({ message: "🚀", data: createPost });
});

app.listen(port, () => {
  console.log("server is now running");
});
