const express = require("express")
const { mainRouter } = require("./Routs")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/api/v1", mainRouter)

app.listen(3000)