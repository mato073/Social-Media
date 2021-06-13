const router = require("express").Router();
const bycrip = require('bcrypt');
const User = require("../models/User")

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {

        if (req.body.password) {
            try {
                const salt = await bycrip.genSalt(10);
                req.body.password = await bycrip.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).send({
                    message: "An error as ocured",
                    error: err
                })
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            return res.status(200).send({
                message: "user as bean updated",
            })
        } catch (err) {
            return res.status(500).send({
                message: "An error as ocured",
                error: err
            })
        }
    } else {
        return res.status(403).send({
            message: 'You can update only your acount'
        })
    }
})

module.exports = router;