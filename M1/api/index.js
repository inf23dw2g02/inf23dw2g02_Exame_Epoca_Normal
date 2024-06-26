const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

const config = require("./src/configs/env.js");
const passport = require("./src/middlewares/passport");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/controllers/swagger-controller");
const routes = require('./src/routes/Routes');

const sessionOptions = {
  secret: 'd1g1m0n',
  resave: false,
  saveUninitialized: true
};

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));



app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes); //to use the routes

// start server
app.listen(config.port, function () {
  console.log(`App running on http://localhost:${config.port}`);
});
