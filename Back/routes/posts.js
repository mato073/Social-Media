const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");


//Create post
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);

        if (post.userId === req.body.userId) {
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
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.userId === req.body.userId) {
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

router.put("/like/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            return res.status(200).json("Post liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            return res.status(200).json("Post disliked");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).send({
            post
        });
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/timeligne/all", async (req, res) => {
    try {
        const curentuser = await User.findById(req.body.userId);
        console.log(curentuser);
        const userPost = await Post.find({userId: curentuser._id});
        const friendPost = await Promise.all(
            curentuser.followings.map((id) => {
                return Post.find({userId: id});
            })
        );
        res.json(userPost.concat(...friendPost));
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;