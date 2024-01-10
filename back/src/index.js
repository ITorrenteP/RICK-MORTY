require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");
const { sequelize } = require("./DB_connection");

const server = express();

const { PORT } = process.env;

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log("Server is listening on port: " + PORT);
});
