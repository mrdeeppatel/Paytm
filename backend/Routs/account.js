const { Router } = require("express");
const { model } = require("mongoose");
const { middlewareUser } = require("../Support/middleware");
const { Account, User } = require("../db");
const accountRouter = Router()


accountRouter.use(middlewareUser)

accountRouter.get("/balance", async (req, res) => {

    const userid = req.userId
    const foundAccount = await Account.findOne({
        userId: userid
    })

    if (!foundAccount) {
        res.status(421).json({ msg: "Account not found account.js" })
        return
    }

    res.json({
        balance: foundAccount.balance
    })
})

accountRouter.post("/transfer", async (req, res) => {
    // const thisUser = req.userId
    // const amountToTransfer = req.body.amount
    // const toUser = req.body.to

    const thisUserAccount = await Account.findOne({
        userId: req.userId
    })
    if (!thisUserAccount) {

        res.status(421).json({ msg: "User Not Valid" })
        return

    }
    if (thisUserAccount.balance - req.body.amount < 0) {

        res.status(421).json({ msg: "Insufficient balance" })
        return
    }


    const toUserAccount = await Account.findOne({
        userId: req.body.to
    })

    if (!toUserAccount) {

        res.status(421).json({ msg: "Invalid account" })
        return
    }
    await Account.updateOne({
        userId: req.userId
    }, {
        "$inc": { balance: -req.body.amount }
    })

    await Account.updateOne({
        userId: req.body.to
    }, {
        "$inc": { balance: req.body.amount }
    })


    res.json({
        msg: "Transfer successful"
    })
})
module.exports = {
    accountRouter
}