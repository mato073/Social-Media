const router = require("express").Router();
const User = require("../models/User");
const bycrip = require('bcrypt');

//Register
router.post("/register", async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Bad argument"
        })
    }
    try {
        const salt = await bycrip.genSalt(10);
        const hashedPassword = await bycrip.hash(req.body.password, salt);

        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();
        return res.status(200).send({
            message: "User have beab created"
        })
    } catch (err) {
        return res.status(500).send({
            message: "An error as ocured",
            error: err
        })
    }
})

//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(400).send({
                message: 'Bad email or password'
            })
        }
        const validPassword = await bycrip.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(400).send({
                message: 'Bad email or password'
            })
        }
        return res.status(200).send({
            message: "User login"
        })
    } catch (err) {
        return res.status(500).send({
            message: "An error as ocured"
        })
    }
})

module.exports = router;