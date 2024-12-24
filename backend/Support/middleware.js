const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")
const middlewareUser = (req, res, next) => {

    const authorization = req.authorization

    const split = authorization.split(" ")

    if (split[0] != "Bearer") {

        res.json({
            MSG: "Token type not valid middleware.js"
        })
        return
    }

    try {

        const dcoded = jwt.verify(split[1], JWT_SECRET)

        req.username = jwt.decode.username

    } catch (err) {

        res.json({ MSG: "Token not valid middleware.js" })
    }

    next()
} 