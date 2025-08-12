const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Get all nomination categories
const getNominationCategories = async (req, res) => {
  try {
    const categories = await prisma.nominationCategory.findMany({
      include: { nominations: true },
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching nomination categories." });
  }
};

// Get nomination category by ID
const getNominationCategoryById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const category = await prisma.nominationCategory.findUnique({
      where: { id },
      include: { nominations: true },
    });
    if (!category) return res.status(404).json({ error: "Category not found." });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error fetching nomination category." });
  }
};

// Create new nomination category
const addNominationCategory = async (req, res) => {
  const { name, description, mediaUrl, status } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required." });

  try {
    const existing = await prisma.nominationCategory.findUnique({ where: { name } });
    if (existing) return res.status(400).json({ error: "Category with this name already exists." });

    const newCategory = await prisma.nominationCategory.create({
      data: {
        name,
        description,
        mediaUrl,
        status: status || "active",
      },
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Error creating nomination category." });
  }
};

// Update nomination category
const updateNominationCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, mediaUrl, status } = req.body;

  try {
    const updatedCategory = await prisma.nominationCategory.update({
      where: { id },
      data: { name, description, mediaUrl, status },
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error updating nomination category." });
  }
};

// Delete nomination category
const deleteNominationCategory = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedCategory = await prisma.nominationCategory.update({
      where: { id },
      data: { status: "inactive" },
    });
    res.json({ message: "Category soft-deleted.", category: deletedCategory });
  } catch (error) {
    res.status(500).json({ error: "Error deleting nomination category." });
  }
};

module.exports = {
  getNominationCategories,
  getNominationCategoryById,
  addNominationCategory,
  updateNominationCategory,
  deleteNominationCategory,
};
