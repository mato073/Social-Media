const router = require("express").Router();
const User = require("../models/User");
const bycrip = require('bcrypt');
var jwt = require('jsonwebtoken');

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
        const user = await User.findOne({ email: req.body.email })
        console.log(user._id);
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
        const id = user._id;
        const role = user.isAdmin
        const token = jwt.sign({ id: id, role: role }, process.env.JWT_TOKEN_SECRET, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ id: id, role: role }, process.env.JWT_REFRESH_SECRET);
        //refreshToken token in db
        return res.status(200).send({
            message: "User login",
            token: token,
            refreshToken: refreshToken
        })
    } catch (err) {
        return res.status(500).send({
            message: "An error as ocured"
        })
    }
})

router.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken === null) res.sendStatus(401);
    //check token in db; if err res.sendStatus(403);
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        const token = jwt.sign({ id: data.id, role: data.role }, process.env.JWT_TOKEN_SECRET, { expiresIn: '20m' });
        res.status(200).json({
            token: token
        })
    })

})

module.exports = router;