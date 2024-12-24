const zod = require("zod")

const zodUser = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

module.exports = {
    zodUser
}