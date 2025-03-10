require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const floorPlanRoutes = require('./routes/floorPlanRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));



// Routes
app.use('/api/floorplan', floorPlanRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
