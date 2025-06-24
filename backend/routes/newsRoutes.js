const express = require('express');
const router = express.Router();
const { getAllHerbNews } = require('../controllers/newsController');

// Route to get herb-related news
router.get('/herb-news', getAllHerbNews);

module.exports = router;
