const express = require('express');
const memberRoutes = express.Router();

const {
    getAllMembers,
    getMemberById
} = require('../controllers/member.controllers');


memberRoutes
    //Get All Members
    .get('/all', getAllMembers)
    // Get Member Details By Id
    .get('/:memberId', getMemberById);

module.exports = memberRoutes;