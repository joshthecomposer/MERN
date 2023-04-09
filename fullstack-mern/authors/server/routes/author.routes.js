const AuthorController = require("../controllers/author.controller");
const Author = require("../models/author.model");

module.exports = (app) => {
    app.post("/api/authors", AuthorController.createAuthor)
    app.get("/api/authors", AuthorController.getAll)
    app.get("/api/authors/:id", AuthorController.getOne)
    app.put("/api/authors/:id", AuthorController.updateOne)
    app.delete("/api/authors/:id", AuthorController.destroyOne)
}