const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notesController');

router.get("/notes", noteController.getAllNotes);

module.exports = router;