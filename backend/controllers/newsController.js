const axios = require('axios');

// News API endpoint (use 'everything' endpoint to search for news)
const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const NEWS_API_KEY = process.env.NEWS_API_KEY;  // Your News API key

// Controller to fetch the latest news related to herbs
exports.getAllHerbNews = async (req, res) => {
  try {
    // Make a request to the external News API to search for news related to herbs
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: 'herbs OR "herbal medicine" OR "natural remedies" OR "plant-based medicine" OR "herbal treatment" OR "herbalism" OR "alternative medicine" OR "botanical medicine"',  // Search keywords for herbs
        apiKey: NEWS_API_KEY,  // Your News API key
        language: 'en',  // Optional: Specify language (English in this case)
        pageSize: 10,  // Optional: Limit to 10 articles (you can adjust as needed)
        sortBy: 'publishedAt',  // Sort by the latest news
      },
    });

    // Send the fetched news articles as a response
    res.json(response.data.articles);  // Assuming the API returns articles in "data.articles"
  } catch (err) {
    console.error('Error fetching herb-related news:', err);
    res.status(500).json({ message: 'Error fetching herb-related news', error: err.message });
  }
};
