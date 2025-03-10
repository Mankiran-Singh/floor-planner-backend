const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: String,
    width: Number,
    height: Number,
    position: { x: Number, y: Number }
});

const WallSchema = new mongoose.Schema({
    length: Number,
    start: { x: Number, y: Number },
    end: { x: Number, y: Number }
});

const DoorSchema = new mongoose.Schema({
    position: { x: Number, y: Number },
    width: Number
});

const WindowSchema = new mongoose.Schema({
    position: { x: Number, y: Number },
    width: Number
});

const FloorPlanSchema = new mongoose.Schema({
    name: String,
    rooms: [RoomSchema],
    walls: [WallSchema],
    doors: [DoorSchema],
    windows: [WindowSchema]
});

module.exports = mongoose.model('FloorPlan', FloorPlanSchema);
