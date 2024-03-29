const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    user: {
        firstname: {
            type: String,
            max: 25
        },
        lastname: {
            type: String,
            max: 25
        },
        userphoto: {
            type: String,
        }
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema)