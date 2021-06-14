const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const validationMiddleware = require('../middleware/authenticateToken')

//Create post
router.post('/', validationMiddleware.authenticateToken, async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }

})

//Update post
router.put('/:id', validationMiddleware.authenticateToken, async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);

        if (post.userId === req.id) {
            await post.updateOne({ $set: req.body });
            return res.status(200).json("Post updated")
        } else {
            return res.status(403).json("you can update only your posts")
        }

    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
})

//Delete a post
router.delete('/:id', validationMiddleware.authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.userId === req.id) {
            await post.deleteOne();
            return res.status(200).json("Post deleted")
        } else {
            return res.status(403).json("you can delete only your posts")
        }

    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
})

router.put("/like/:id", validationMiddleware.authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.id)) {
            await post.updateOne({ $push: { likes: req.id } });
            return res.status(200).json("Post liked");
        } else {
            await post.updateOne({ $pull: { likes: req.id } });
            return res.status(200).json("Post disliked");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/:id", validationMiddleware.authenticateToken, async (req, res) => {
    try {
        console.log(req.params.id);
        const post = await Post.findById(req.params.id);
        return res.status(200).send({
            post
        });
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/timeligne/all", validationMiddleware.authenticateToken, async (req, res) => {
    try {
        const curentuser = await User.findById(req.id);
        const userPost = await Post.find({ userId: curentuser._id });
        const friendPost = await Promise.all(
            curentuser.followings.map((id) => {
                return Post.find({ userId: id });
            })
        );
        res.json(userPost.concat(...friendPost));
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;