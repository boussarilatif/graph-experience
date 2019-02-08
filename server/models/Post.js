import mongoose from "mongoose"

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: Date.now,
        ref: "User"
    },
    messages: [{
        messageBody: {
            type: String,
            required: true
        },
        messageDate: {
            type: Date,
            default: Date.now
        },
        messageUser: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
    }],
    createdDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Post", PostSchema)