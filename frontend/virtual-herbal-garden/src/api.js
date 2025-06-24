// api.js

import axios from 'axios';

// Define the base URL for your backend API
const BASE_URL = 'http://localhost:5000/api';  // Update this if your backend is hosted elsewhere

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Fetch all blogs
export const fetchBlogs = () => {
  return api.get('/blogs');  // Correct route on the backend
};

// Fetch a single blog by ID
export const fetchBlogById = (id) => {
  return api.get(`/blogs/${id}`);
};

// Fetch all herbs
export const fetchHerbs = () => {
  return api.get('/herbs');  // Correct route on the backend
};

// Fetch a single herb by ID
export const fetchHerbById = (id) => {
  return api.get(`/herbs/${id}`);
};

// Fetch news (integrate this if you're using a news API)
export const fetchNews = () => {
  return api.get('/news');  // Correct route on the backend
};
