const mongoose=require('mongoose');

const phantomSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timeTaken: {
        type: Number,
        required: true
    },
    raw_WPM: {
        type: Number,
        required: true
    },
    acurracy: {
        type: Number,
        required: true
    },
    adjusted_WPM: {
        type: Number,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    response: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
    }
});

const Phantoms=mongoose.model('phantom', phantomSchema);

module.exports=Phantoms;