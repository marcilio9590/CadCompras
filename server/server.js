var express = require("express"),
    app = express(),

    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 8081;

app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('../'));

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.get("/", function (req, res) {
    res.redirect("app/index.html");
});

app.get("/home", function (req, res) {
    res.redirect("/app/modules/home/home.html");
});

console.log("Simple server listening at http://" + hostname + ":" + port);

app.listen(port, hostname);