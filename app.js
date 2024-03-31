const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);


const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
