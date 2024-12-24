const { Router } = require("express");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")
const { zodUser } = require("../Support/zod");
const { User } = require("../db");
const userRouteer = Router()


userRouteer.post("/signup", async (req, res) => {

    const header = req.headers
    const parsed = zodUser.safeParse(header)

    if (!parsed.success) {

        res.send("User credentials are not valid")
        return
    }
    const isExsist = await User.findOne({
        username: header.username
    })
    console.log(isExsist)

    if (isExsist) {
        res.json({
            message: "Email already taken / Incorrect inputs"
        })
        return
    }

    const newuser = await User.create({
        username: header.username,
        password: header.password,
        fname: header.firstname,
        lname: header.lastname
    })
    console.log(newuser)

    // const token = jwt.sign({
    //     userId: newuser._id,
    //     firstname: firstname,
    //     lastname: lastname

    // }, JWT_SECRET)
    res.json({
        userId: "userId of newly added user",
        // token: token

    })
})

userRouteer.post("/signin", async (req, res) => {

    const header = req.headers

    const user = await User.findOne({
        username: header.username,
        password: header.password
    })

    if (!user) {

        res.json({ message: "Error while logging in" })
        return
    }

    const token = jwt.sign({
        userId: header.username
    }, JWT_SECRET)

    res.json({
        token: token
    })

})

module.exports = {
    userRouteer
}