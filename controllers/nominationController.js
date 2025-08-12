const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Get all nominations
const getNominations = async (req, res) => {
    try {
        const nominations = await prisma.nomination.findMany({
            include: { category: true }
        });
        res.status(200).json(nominations);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching nominations." });
    }
};

// Get nomination by ID
const getNominationById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const nomination = await prisma.nomination.findUnique({
            where: { id },
            include: { category: true }
        });
        if (!nomination) {
            return res.status(404).json({ error: "Nomination not found." });
        }
        res.status(200).json(nomination);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the nomination." });
    }
};

// Create nomination
const addNomination = async (req, res) => {
    const { fullName, age, email, phoneNumber, achievements, type, categoryId, status } = req.body;
    const documentUrl = req.files?.document ? `/uploads/${req.files.document[0].filename}` : null;
    const mediaUrl = req.files?.media ? `/uploads/${req.files.media[0].filename}` : null;

    if (!fullName || !age || !email || !phoneNumber || !type || !categoryId) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    try {
        const categoryExists = await prisma.nominationCategory.findUnique({
            where: { id: parseInt(categoryId) }
        });
        if (!categoryExists) {
            return res.status(400).json({ error: "Invalid categoryId. Category does not exist." });
        }

        const newNomination = await prisma.nomination.create({
            data: {
                fullName,
                age: parseInt(age),
                email,
                phoneNumber,
                achievements,
                documentUrl,
                mediaUrl,
                type,
                categoryId: parseInt(categoryId),
                status: status || "active"
            }
        });
        res.status(201).json(newNomination);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the nomination." });
    }
};

// Update nomination
const updateNomination = async (req, res) => {
    const id = parseInt(req.params.id);
    const { fullName, age, email, phoneNumber, achievements, type, categoryId, status } = req.body;
    const documentUrl = req.files?.document ? `/uploads/${req.files.document[0].filename}` : null;
    const mediaUrl = req.files?.media ? `/uploads/${req.files.media[0].filename}` : null;

    try {
        const updatedNomination = await prisma.nomination.update({
            where: { id },
            data: {
                fullName,
                age: parseInt(age),
                email,
                phoneNumber,
                achievements,
                documentUrl: documentUrl || undefined,
                mediaUrl: mediaUrl || undefined,
                type,
                categoryId: categoryId ? parseInt(categoryId) : undefined,
                status
            }
        });
        res.status(200).json(updatedNomination);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the nomination." });
    }
};

// Delete nomination
const deleteNomination = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deletedNomination = await prisma.nomination.update({
            where: { id },
            data: { status: "inactive" }
        });
        res.json({ message: "Nomination soft-deleted successfully.", nomination: deletedNomination });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the nomination." });
    }
};

module.exports = {
    getNominations,
    getNominationById,
    addNomination,
    updateNomination,
    deleteNomination
};
