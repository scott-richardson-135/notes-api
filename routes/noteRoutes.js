const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notesController');

router.get("/notes", noteController.getAllNotes);

router.post("/notes", noteController.createNote);

module.exports = router;