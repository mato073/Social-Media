const router = require("express").Router();
const bycrip = require('bcrypt');
const User = require("../models/User")

//Update User
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

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

//Del user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).send({
                message: "user as bean deleted",
            })
        } catch (err) {
            return res.status(500).send({
                message: "An error as ocured",
                error: err
            })
        }
    } else {
        return res.status(403).send({
            message: 'You can only delete your acount'
        })
    }
})

//Get user

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).send({
                message: 'User not found'
            })
        }
        const { password, createdAt, updatedAt, ...rest } = user._doc;
        return res.status(200).send({
            user: rest
        })
    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
})

//follow a user

router.put("/follow/:id", async (req, res) => {

    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const curentUser = await User.findById(req.body.userId);
            if (!user || !curentUser) {
                return res.status(400).send({
                    message: 'User not found'
                })
            }
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await curentUser.updateOne({ $push: { followings: req.params.id } })
                return res.status(200).send({
                    message: 'User followed'
                })
            } else {
                return res.status(400).send({
                    message: 'user alrady followed'
                })
            }
        } catch (err) {
            return res.status(500).send({
                error: err
            })
        }
    } else {
        return res.status(403).send({
            message: 'You cant follow yourself'
        })
    }
})

//Unfollow user

router.put("/unfollow/:id", async (req, res) => {

    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const curentUser = await User.findById(req.body.userId);
            if (!user || !curentUser) {
                return res.status(400).send({
                    message: 'User not found'
                })
            }
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await curentUser.updateOne({ $pull: { followings: req.params.id } })
                return res.status(200).send({
                    message: 'User unfollowed'
                })
            } else {
                return res.status(400).send({
                    message: 'you unfollowed this user alrady'
                })
            }
        } catch (err) {
            return res.status(500).send({
                error: err
            })
        }
    } else {
        return res.status(403).send({
            message: 'You cant unfollow yourself'
        })
    }
})

module.exports = router;