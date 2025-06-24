const mongoose = require('mongoose');

// Herb Schema
const herbSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Herb model
const Herb = mongoose.model('Herb', herbSchema);

module.exports = Herb;
