const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        min: 2,
        max: 25,
        unique: false
    },
    lastname: {
        type: String,
        require: true,
        min: 2,
        max: 20,
        unique: false
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "https://i1.wp.com/www.olympine.com/olympine/wp-content/uploads/2021/05/leelee-sobieski-seins-nus-mai-2021-02.jpg?resize=768%2C1024&ssl=1"
    },
    coverPicture: {
        type: String,
        default: "https://thumb-p6.xhcdn.com/a/giPNgRMktBI8NyVWe5er1g/000/009/760/676_1000.jpg"
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dec: {
        type: String,
        max: 200
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    job: {
        type: String,
        max: 150
    },
    relationship: {
        type: String,
        enum: [1,2,3]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)