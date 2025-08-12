const express = require('express');
const multer = require('multer');
const path = require('path');
const upload = require('../middleware/upload');
const {
    getGalleryItems,
    getGalleryItemById,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem
} = require('../controllers/galleryItemController');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});


// Routes
router.get('/', getGalleryItems);
router.get('/:id', getGalleryItemById);
router.post('/', upload.single('media'), addGalleryItem);
router.put('/:id', upload.single('media'), updateGalleryItem);
router.delete('/:id', deleteGalleryItem);

module.exports = router;
