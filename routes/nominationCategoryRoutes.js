const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {
  getNominationCategories,
  getNominationCategoryById,
  addNominationCategory,
  updateNominationCategory,
  deleteNominationCategory,
} = require('../controllers/nominationCategoryController');

// Routes
router.get('/', getNominationCategories);
router.get('/:id', getNominationCategoryById);
router.post('/', upload.single('mediaUrl'), addNominationCategory);
router.put('/:id', updateNominationCategory);
router.delete('/:id', deleteNominationCategory);

module.exports = router;
