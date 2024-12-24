const { Router } = require("express");
const { userRouter } = require("./user");
const { accountRouter } = require("./account");
const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/account", accountRouter)

module.exports = {
    mainRouter
}