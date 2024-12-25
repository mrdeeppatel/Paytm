const { Router } = require("express");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")
const { zodUser, updateBody } = require("../Support/zod");
const { User, Account } = require("../db");
const { middlewareUser } = require("../Support/middleware");
// const { boolean } = require("zod");
const userRouter = Router()


userRouter.post("/signup", async (req, res) => {

    const header = req.headers
    const parsed = zodUser.safeParse(header)

    if (!parsed.success) {

        res.status(411).json({
            msg: "User inputs are not valid"
        })
        return
    }
    const isExsist = await User.findOne({
        username: header.username
    })
    console.log(isExsist)

    if (isExsist) {
        res.status(411).json({
            msg: "Email already taken / Incorrect inputs"
        })
        return
    }

    const newuser = await User.create({
        username: header.username,
        password: header.password,
        fname: header.firstname,
        lname: header.lastname
    })

    const newAccount = await Account.create({
        userId: newuser._id,
        balance: Math.ceil(Math.random() * 1000)
    })

    console.log(newuser)

    res.json({
        userId: "userId of newly added user" + newuser._id,
        // token: token

    })
})

userRouter.post("/signin", async (req, res) => {

    const header = req.headers

    const user = await User.findOne({
        username: header.username,
        password: header.password
    })

    if (!user) {

        res.status(411).json({ msg: "Username or password doesn't match" })
        return
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)

    res.json({
        token: token
    })

})

userRouter.use(middlewareUser)

userRouter.put("/", async (req, res) => {
    const body = req.body
    const { success } = updateBody.safeParse(req.body, JWT_SECRET)

    if (!success) {
        res.json({ message: "Error while updating information" })
        return
    }
    await User.updateOne({
        _id: req.userId

    }, {
        password: body.password,
        fname: body.firstname,
        lname: body.lastname
    })

    res.json({ message: "Updated successfully" })
})

userRouter.get("/bulk", async (req, res) => {
    const name = req.query.name ? req.query.name : ""
    // console.log("++++++++++++" + req.query.name + "++++++++++")
    const matchedUsers = await User.find({
        "$or": [
            { fname: { "$regex": name } },
            { lname: { "$regex": name } }
        ]
    })

    res.json({
        users: matchedUsers.map((obj) => {

            return {
                username: obj.username,
                firstname: obj.fname,
                lastname: obj.lname,
                id: obj._id
            }
        })
    })
})
module.exports = {
    userRouter
}