const express = require('express')
const app = express();
const cors = require('cors');
const routes = require('./routes.js');

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ["sessionId","Content-Type"],
    exposeHeaders: ['sessionId'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
}));

app.use("/api", routes);

app.listen('8000');