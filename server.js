// server.js

const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Globale Variablen für Pug
const dataLoader = require('./src/utils/dataLoader');
Object.assign(app.locals, {
  site: dataLoader.siteData,
  contact: dataLoader.contactData,
  getSlider: (id) => dataLoader.sliderData.sliders.find(s => s.id === id),
  getGallery: (id) => dataLoader.galleryData[id] || []
});

// Router
const apiRouter = require('./src/routes/api');
const pageController = require('./src/controllers/pageControllers');
const { get } = require('http');

app.use('/api', apiRouter);
app.get('/', pageController.home);
app.get('/maintenance', pageController.maintenance);
app.get('/404', pageController.notFound);
app.get('/:id', pageController.dynamicPage);

// Fehlerbehandlung
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`✅ Server läuft auf http://localhost:${PORT}/`));
