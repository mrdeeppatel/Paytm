const zod = require("zod")

const zodUser = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

const updateBody = zod.object({
    password: zod.string().min(8).optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})
module.exports = {
    zodUser,
    updateBody
}