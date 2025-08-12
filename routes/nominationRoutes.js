const express = require('express');
const multer = require('multer');
const path = require('path');
const upload = require('../middleware/upload');

const {
    getNominations,
    getNominationById,
    addNomination,
    updateNomination,
    deleteNomination
} = require('../controllers/nominationController');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});


// Routes
router.get('/', getNominations);
router.get('/:id', getNominationById);
router.post('/', upload.fields([{ name: 'document', maxCount: 1 }, { name: 'media', maxCount: 1 }]), addNomination);
router.put('/:id', upload.fields([{ name: 'document', maxCount: 1 }, { name: 'media', maxCount: 1 }]), updateNomination);
router.delete('/:id', deleteNomination);

module.exports = router;
