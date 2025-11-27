// src/controllers/pageControllers.js

const path = require('path');
const fs = require('fs');
const { siteData, sliderData, galleryData } = require('../utils/dataLoader');

// Hilfsfunktionen
function getFirstPageLink() {
  const firstChapter = siteData.header.chapters?.[0];
  const firstSub = firstChapter?.subpages?.[0];
  return firstChapter && firstSub ? `/${firstSub.id}` : '/';
}

function findPageById(id) {
  for (const chap of siteData.header.chapters) {
    if (chap.id === id) return { chapter: chap, subObj: null };
    const foundSub = chap.subpages?.find(s => s.id === id);
    if (foundSub) return { chapter: chap, subObj: foundSub };
  }
  return null;
}

// Controller-Funktionen
exports.home = (req, res) => {
  res.render('page/home', {
    site: siteData,
    sliders: sliderData.sliders,
    firstPageLink: getFirstPageLink()
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

  const topbarPage = siteData.header.topbar.find(item => item.id === pageId);
  if (topbarPage) {
    if (topbarPage.maintenance) return res.redirect('/maintenance');

    const file = path.join(__dirname, '../../views/page', `${pageId}.pug`);
    const viewPath = fs.existsSync(file) ? `page/${pageId}` : 'page/route/route-maintenance';
    return res.render(viewPath, { title: topbarPage.title });
  }

  const result = findPageById(pageId);
  if (!result) return res.redirect('/404');

  const { chapter, subObj } = result;
  if (chapter.maintenance || (subObj && subObj.maintenance)) return res.redirect('/maintenance');

  const folder = chapter.id;
  const file = path.join(__dirname, '../../views/page', folder, `${pageId}.pug`);
  const viewPath = fs.existsSync(file) ? `page/${folder}/${pageId}` : 'page/route/route-maintenance';

  res.render(viewPath, { title: subObj ? subObj.title : chapter.title });
};
