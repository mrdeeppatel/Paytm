const { Router } = require("express");
const { userRouteer } = require("./user");
const mainRouter = Router()

mainRouter.use("/user", userRouteer)

module.exports = {
    mainRouter
}