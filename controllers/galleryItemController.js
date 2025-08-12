const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Get all gallery items
const getGalleryItems = async (req, res) => {
    try {
        const items = await prisma.galleryItem.findMany();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching gallery items." });
    }
};

// Get gallery item by ID
const getGalleryItemById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const item = await prisma.galleryItem.findUnique({ where: { id } });
        if (!item) {
            return res.status(404).json({ error: "Gallery item not found." });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the gallery item." });
    }
};

// Create new gallery item
const addGalleryItem = async (req, res) => {
    const { title, description, mediaType, status } = req.body;
    const mediaUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !mediaType || !mediaUrl) {
        return res.status(400).json({ error: "Title, mediaType, and media file are required." });
    }

    try {
        const newItem = await prisma.galleryItem.create({
            data: {
                title,
                description,
                mediaType,
                mediaUrl,
                status: status || "active"
            }
        });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the gallery item." });
    }
};

// Update gallery item
const updateGalleryItem = async (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, mediaType, status } = req.body;
    const mediaUrl = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const updatedItem = await prisma.galleryItem.update({
            where: { id },
            data: {
                title,
                description,
                mediaType,
                mediaUrl: mediaUrl || undefined,
                status
            }
        });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the gallery item." });
    }
};

// Delete gallery item
const deleteGalleryItem = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deletedItem = await prisma.galleryItem.update({
            where: { id },
            data: { status: "inactive" }
        });
        res.json({ message: "Gallery item soft-deleted successfully.", item: deletedItem });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the gallery item." });
    }
};

module.exports = {
    getGalleryItems,
    getGalleryItemById,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem
};
