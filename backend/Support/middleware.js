const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")
const middlewareUser = (req, res, next) => {

    const authorization = req.headers.authorization

    console.log(authorization)
    const split = authorization.split(" ")

    if (split[0] != "Bearer" || !authorization) {

        res.json({
            MSG: "Token type not valid middleware.js"
        })
        return
    }

    try {

        const decoded = jwt.verify(split[1], JWT_SECRET)

        console.log(decoded.userId +" middleware")

        if (decoded.userId) {

            req.userId = decoded.userId
            next()
        } else {

            res.json({
                MSG: "Token doesn't have UserId"
            })
        }

    } catch (err) {

        res.json({ MSG: "Token not valid middleware.js" })
    }

}
module.exports = {
    middlewareUser
}