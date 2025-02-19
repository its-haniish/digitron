// const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const {competitionSchema} = require("./Events.js");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true
    },
    branch:{
        type: String,
        required: true
    },
    semester: {
        type: Number,
        requried: true
    },
    competitionsParticipated:{
        type: [{
            competitionName: {
                type: String,
                required: true
            },
            isPaid:{
                type: Boolean,
                default: false
            },
            teamName:{
                type: String,
                unique: true
            },
            eventName:{
                type: String,
                required: true
            }
        }]
    }
});

// studentSchema.pre("save", async function (next) {
//     try {
//         const saltRound = await bcrypt.genSalt();
//         const hash_password = await bcrypt.hash(this.password, saltRound);
//         this.password = hash_password;
//         return next();
//     } catch (error) {
//         return next(error);
//     }
// });

// studentSchema.methods.generateToken = async function () {
//     try {
//         return jwt.sign({ id: this._id.toString() }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
//     } catch (error) {
//         // Handle error appropriately
//         console.error('Error generating token:', error);
//         return null; // Or throw error as per your requirement
//     }
// };

// studentSchema.methods.comparePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// }


const Students = new mongoose.model('Student', studentSchema);

module.exports = Students;