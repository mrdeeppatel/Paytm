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
        res.json({
            MSG: "Account not found account.js"
        })
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

        res.json({ message: "User Not Valid" })
        return

    }
    if (thisUserAccount.balance - req.body.amount < 0) {

        res.json({ message: "Insufficient balance" })
        return
    }


    const toUserAccount = await Account.findOne({
        userId: req.body.to
    })

    if (!toUserAccount) {

        res.json({ message: "Invalid account" })
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
        message: "Transfer successful"
    })
})
module.exports = {
    accountRouter
}