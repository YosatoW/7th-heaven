// src/controllers/pageControllers.js

const fs = require('fs');
const path = require('path');
const siteData = JSON.parse(fs.readFileSync('./public/json/site.json', 'utf8'));
const sliderData = JSON.parse(fs.readFileSync('./public/json/slider.json', 'utf8'));
const galleryData = JSON.parse(fs.readFileSync('./public/json/gallery.json', 'utf8'));

exports.home = (req, res) => {
  res.render('page/home', {
    site: siteData,
    sliders: sliderData.sliders
  });
};

exports.maintenance = (req, res) => {
  res.status(503).render('page/route/route-maintenance', { title: 'Wartungsmodus' });
};

exports.notFound = (req, res) => {
  res.status(404).render('page/route/route-404', { title: 'Seite nicht gefunden' });
};

exports.dynamicPage = (req, res) => {
  const pageId = req.params.id;
  // Hier deine Logik aus server.js übernehmen (findPageById etc.)
};
