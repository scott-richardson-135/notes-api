const { use } = require("../app");
const { Note } = require("../models");

exports.getAllNotes = async (req, res) => {
    const notes = await Note.findAll();
    res.json(notes)
}

exports.createNote = async (req, res) => {
    try {
        const { title, encryptedContent, userID } = req.body;

        if (!title || !encryptedContent || !userID) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
    
        const note = await Note.create({Title: title, encryptedContent, userID});
        res.status(201).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to create note"});
    }
}
