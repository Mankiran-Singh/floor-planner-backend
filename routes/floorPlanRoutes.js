const express = require('express');
const router = express.Router();
const FloorPlan = require('../models/FloorPlan');

/*
let floorPlanData = {
    name: "Sample Layout",
    rooms: [
        { name: "Bedroom", width: 12, height: 10, position: { x: 0, y: 0 } },
        { name: "Kitchen", width: 10, height: 8, position: { x: 12, y: 0 } }
    ],
    walls: [
        { length: 12, start: { x: 0, y: 0 }, end: { x: 12, y: 0 } }
    ],
    doors: [
        { position: { x: 6, y: 0 }, width: 3 }
    ],
    windows: [
        { position: { x: 10, y: 8 }, width: 4 }
    ]
};
*/


router.get('/', async (req, res) => {
    try {
       const floorPlans = await FloorPlan.find();
       res.json(floorPlans);  
      //  res.json(floorPlanData);  
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log("Received Data:", req.body); 
        const newFloorPlan = new FloorPlan(req.body);
        await newFloorPlan.save();
        res.status(201).json(newFloorPlan);
    } catch (err) {
        console.error("Error Details:", err); 
        res.status(500).json({ error: "Error saving floor plan", details: err.message });
    }
});

module.exports = router;
