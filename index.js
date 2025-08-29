const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//Routes
const nominationCategoryRoutes = require('./routes/nominationCategoryRoutes');
const nominationRoutes = require('./routes/nominationRoutes');
const galleryItemRoutes = require('./routes/galleryItemRoutes');

dotenv.config();

const app = express();
const PORT = 3000;


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('./uploads'));



//Routes
app.use('/api/nominationCategories', nominationCategoryRoutes);
app.use('/api/nominations', nominationRoutes);
app.use('/api/gallery', galleryItemRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
