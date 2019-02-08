import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Post"
    }
})

export default mongoose.model("User", UserSchema)