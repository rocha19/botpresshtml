var express = require("express");
app = express()

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index");
});

app.listen(3306, () => {
    console.log("Servidor on!");
})