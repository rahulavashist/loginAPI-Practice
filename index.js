const express = require("express")

require("./dbConnect")
const PracticeRoutes = require("./routes/PracticeRoutes")

const app = express()
app.use(express.json())
app.use("/api/login",PracticeRoutes)

app.listen(80,()=>{console.log(`Server Run on http://localhost:80`)})
