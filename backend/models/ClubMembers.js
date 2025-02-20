const mongoose = require('mongoose');

const clubMembersSchema = new mongoose.Schema({
    clubMemberName: {
        type: String,
        required: true
    },
    clubMemberEmail: {
        type: String,
        required: true
    },
    clubMemberPhone: {
        type: String,
        required: true
    },
    clubMemberPosition: {
        type: true,
        required: true
    },
    clubMemberSemester: {
        type: Number,
        required: true
    },
    clubMemberBatch: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    profilePic: {
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
    },
    socialMediaLinks: {
        linkedin: {
            type: String,
            required: true
        },
        instagram: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: true
        },
        portfolio: {
            type: String
        }
    }

});

const Members = mongoose.model('ClubMembers', clubMembersSchema);

module.exports = {Members};