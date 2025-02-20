    const mongoose = require('mongoose');

    const eventSchema = new mongoose.Schema({
        eventName: {
            type: String,
            required: true
        },
        eventYear: {
            type: Number,
            default:   new Date().getFullYear(),
            required: true
        },
        eventDescription:{
            type: String,
            required: true
        },
        eventPoster: {
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
        eventDate:{
            type: String,
            required: true
        },
        eventVenue: {
            type: String,
            required: true
        },
        eventRules: {
            type: [String],
            default: []
        },
        organizers: {
            type: [{
                organizerImage: {
                    type: String,
                    required: true
                },
                organizerName: {
                    type: String,
                    required: true
                },
                organizerBatch: {
                    type: String,
                    match: /^\d{4}-\d{2}$/ // Ensures format like "2021-24"
                },
                organizerPhone:{
                    type: String,
                    required: true
                }
            }],
            default: []
        },
        competitions: {
            type:[{
                competitionName: {
                    type: String,
                    required: true
                },
                competitionType: {
                    type: String,
                    required: true
                },
                competitionPoster: {
                    type: String,
                    required: true
                },
                competitionDescription: {
                    type: String,
                    // required: true
                },
                competitionTopics: {
                    type: [String],
                    default: []
                },
                competitionRules:{
                    type: [{
                        ruleTitle: {
                            type: String,
                            required: true
                        },
                        rulePoints: {
                            type: [String],
                            required: true
                        }
                    }],
                    default: []
                },
                winners:{
                    type: [{
                        studentName: {
                            type: String,
                            required: true
                        },
                        studentRollNo: {
                            type: Number,
                            required: true
                        },
                        studentImage: {
                            type: String,
                            required: true
                        },
                        studentBatch: {
                            type: String,
                            required: true,
                            match: /^\d{4}-\d{2}$/ // Ensures format like "2021-24"
                        }
                    }],
                    default: []
                }
            }]
        }
    });




    const Events = new mongoose.model('event', eventSchema);

    module.exports = {Events};
