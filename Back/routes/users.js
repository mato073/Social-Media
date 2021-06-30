const router = require("express").Router();
const bycrip = require('bcrypt');
const User = require("../models/User")
const validationMiddleware = require('../middleware/authenticateToken')

//Update User
router.put("/", validationMiddleware.authenticateToken,
    async (req, res) => {
        if (req.id || req.role === true) {

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
                const user = await User.findByIdAndUpdate(req.id, {
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
router.delete("/", validationMiddleware.authenticateToken,
    async (req, res) => {
        if (res.id || req.role === true) {
            try {
                const user = await User.findByIdAndDelete(req.id);
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

router.get("/", validationMiddleware.authenticateToken,
    async (req, res) => {
        try {
            const user = await User.findById(req.id);
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

router.put("/follow/:id", validationMiddleware.authenticateToken,
    async (req, res) => {

        if (req.id !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const curentUser = await User.findById(req.id);
                if (!user || !curentUser) {
                    return res.status(400).send({
                        message: 'User not found'
                    })
                }
                if (!user.followers.filter((element) => JSON.stringify(element.userId) === JSON.stringify(req.id)).length > 0) {

                    const newFollower = {
                        userId: curentUser._id,
                        profilePicture: curentUser.profilePicture,
                        firstname: curentUser.firstname,
                        lastname: curentUser.lastname
                    }
                    const newFollowing = {
                        userId: user._id,
                        profilePicture: user.profilePicture,
                        firstname: user.firstname,
                        lastname: user.lastname
                    }
                    await user.updateOne({ $push: { followers: newFollower } })
                    await curentUser.updateOne({ $push: { followings: newFollowing } })
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

router.put("/unfollow/:id", validationMiddleware.authenticateToken,
    async (req, res) => {

        if (req.id !== req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                const curentUser = await User.findById(req.id);
                if (!user || !curentUser) {
                    return res.status(400).send({
                        message: 'User not found'
                    })
                } if (user.followers.filter((element) => JSON.stringify(element.userId) === JSON.stringify(req.id)).length > 0) {
                    await user.updateOne({ $pull: { followers: { userId: req.id } } })
                    await curentUser.updateOne({ $pull: { followings: { userId: req.params.id } } })
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


const login = (ip, email, password, firstname, lastname) => {

    const data = new URLSearchParams({

    })
    fetch('https://localhost/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}