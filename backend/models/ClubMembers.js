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
        type: Number,
        required: true
    },
    clubMemberPosition: {
        type: String,
        required: true
    },
    clubMemberSemester: {
        type: Number,
        required: true
    },
    clubMemberBatch: {
        type: String,
        match: /^\d{4}-\d{2}$/ // Ensures format like "2021-24"
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