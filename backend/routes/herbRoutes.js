const express = require('express');
const herbController = require('../controllers/herbController');  // Import controller
const router = express.Router();

// GET all herbs
router.get('/herbs', herbController.getAllHerbs);  // Use the controller method to fetch all herbs

// POST a new herb
router.post('/herb', herbController.createHerb);  // Use the controller method to create a new herb

module.exports = router;
