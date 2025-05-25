const { Note } = require("../models");

exports.getAllNotes = async (req, res) => {
    const notes = await Note.findAll();
    res.json(notes)
}


