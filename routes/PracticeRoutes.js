const express = require("express")
const Practice = require("../model/Practice")

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        var data = new Practice(req.body)
        await data.save()
        res.send({ result: "Done", message: "Record is created", data: data })
    }
    catch (error) {
        if (error.errors.username)
            res.status(400).send({ result: "Fail", message: error.errors.username.message })
        else if (error.errors.email)
            res.status(400).send({ result: "Fail", message: error.errors.email.message })
        else res.status(500).send({ result: "Fail", message: "Internal Server error" })

    }
})

module.exports = router