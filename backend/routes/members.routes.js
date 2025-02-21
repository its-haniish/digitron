const express = require('express');
const memberRoutes = express.Router();

const {
    getAllMembers,
    getMemberById,
    addMember,
    updateMember,
    deleteMember
} = require('../controllers/member.controllers');


memberRoutes
    //Get All Members
    .get('/all', getAllMembers)
    
    // Get Member Details By Id
    .get('/:memberId', getMemberById)

    // Add New Member
    .post('/add', addMember)

    // Update Member Details
    .put('/update/:memberId', updateMember)

    // Delete Member
    .delete('/delete/:memberId', deleteMember);


module.exports = memberRoutes;