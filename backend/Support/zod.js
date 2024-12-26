const zod = require("zod")

const zodUser = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    firstname: zod.string().min(1),
    lastname: zod.string().min(1)
})

const updateBody = zod.object({
    password: zod.string().min(8).optional(),
    firstname: zod.string().min(1).optional(),
    lastname: zod.string().min(1).optional()
})
module.exports = {
    zodUser,
    updateBody
}