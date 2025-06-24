const Herb = require('../models/Herb');  // Import the Herb model

// Controller to fetch all herbs
exports.getAllHerbs = async (req, res) => {
  try {
    const herbs = await Herb.find();  // Fetch all herbs from the database
    res.json(herbs);  // Send herbs as response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch herbs' });
  }
};

// Controller to create a new herb
exports.createHerb = async (req, res) => {
  const { name, description, benefits, imageUrl } = req.body;  // Destructure the request body
  
  try {
    // Create a new Herb document
    const newHerb = new Herb({
      name,
      description,
      benefits,
      imageUrl,
    });

    // Save the new herb to the database
    await newHerb.save();
    
    // Send the saved herb as a response
    res.status(201).json(newHerb);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create herb' });
  }
};
