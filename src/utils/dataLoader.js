// src/utils/dataLoader.js

const fs = require('fs');
const path = require('path');

function loadJSON(file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json', file), 'utf8'));
}

module.exports = {
  siteData: loadJSON('site.json'),
  sliderData: loadJSON('slider.json'),
  galleryData: loadJSON('gallery.json'),
  contactData: loadJSON('contact.json')
};

