// server.js
// ─────────────────────────────────────────────────────────────
// 📦 IMPORTS
// ─────────────────────────────────────────────────────────────
const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const contactRouter = require('./src/routes/contact');
const newsletterRouter = require('./src/routes/newsletter');


// ─────────────────────────────────────────────────────────────
// ⚙️ KONFIGURATION
// ─────────────────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 3000;
const basePath = '';

app.locals.basePath = basePath;


// ─────────────────────────────────────────────────────────────
// 🧩 MIDDLEWARES
// ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

// Session-Konfiguration
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


// ─────────────────────────────────────────────────────────────
// 🛠️ API-ROUTEN
// ─────────────────────────────────────────────────────────────
const apiRouter = express.Router();
apiRouter.use('/contact', contactRouter);
apiRouter.use('/newsletter', newsletterRouter);
app.use('/api', apiRouter);


// ─────────────────────────────────────────────────────────────
// 📄 JSON LADEN
// ─────────────────────────────────────────────────────────────

//  Seitenstruktur / Navigation 
const siteData = JSON.parse(fs.readFileSync('./public/json/site.json', 'utf8'));
app.locals.site = siteData;

//  Slider-Daten 
const sliderData = JSON.parse(fs.readFileSync('./public/json/slider.json', 'utf-8'));
app.locals.getSlider = function (id) {
  return sliderData.sliders.find(s => s.id === id);
};

//  Galerie-Daten
const galleryData = JSON.parse(fs.readFileSync('./public/json/gallery.json', 'utf8'));
app.locals.getGallery = function (id) {
  return galleryData[id] || [];
};


// ─────────────────────────────────────────────────────────────
// 🧱 PUG ENGINE
// ─────────────────────────────────────────────────────────────
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = path.join(__dirname, 'views');


// ─────────────────────────────────────────────────────────────
// 🔧 HILFSFUNKTIONEN
// ─────────────────────────────────────────────────────────────

//  Erste Unterseite bestimmen 
function getFirstPageLink() {
  const firstChapter = siteData.header.chapters?.[0];
  const firstSub = firstChapter?.subpages?.[0];
  return firstChapter && firstSub ? `/${firstSub.id}` : `${basePath}/`;
}
app.locals.getFirstPageLink = getFirstPageLink;

//  Seite anhand ID finden 
function findPageById(id) {
  for (const chap of siteData.header.chapters) {
    if (chap.id === id) return { chapter: chap, subObj: null };

    const foundSub = chap.subpages?.find(s => s.id === id);
    if (foundSub) return { chapter: chap, subObj: foundSub };
  }
  return null;
}

//  Render-Funktion 
function renderPage(res, view, data = {}) {
  res.render(view, {
    site: siteData,
    ...data
  });
}

//  E-Mail-Adressen 
app.locals.contact = {
  name: '7th Heaven',
  owner: 'Tifa Lockhart',
  address: 'Sektor 7 Slums, Midgar',
  add: 'neben der alte Bahnlinie',
  plz: 'Postcode M7-777',
  city: 'Midgar City',
  phone: '+13 01 97 HEAVEN',
  email:  {
    info: 'info@7thheaven-midgar.jp',
    hr: 'hr@7thheaven-midgar.jp'
  }
};


// ─────────────────────────────────────────────────────────────
// 🌐 SEITEN-ROUTEN
// ─────────────────────────────────────────────────────────────

//  Startseite 
app.get(`${basePath}/`, (req, res) => {
  const sliderData = JSON.parse(fs.readFileSync('./public/json/slider.json', 'utf-8'));
  renderPage(res, './page/home', {
    firstPageLink: getFirstPageLink(),
    sliders: sliderData.sliders
  });
});

// Wartungsseite
app.get('/maintenance', (req, res) => {
  res.status(503).render('page/route/route-maintenance', { title: 'Wartungsmodus' });
});

// 404-Seite
app.get('/404', (req, res) => {
  res.status(404).render('page/route/route-404', { title: 'Seite nicht gefunden' })
});

app.get('/:id', (req, res) => {
  const pageId = req.params.id;

  // Topbar prüfen
  const topbarPage = siteData.header.topbar.find(item => item.id === pageId);

  if (topbarPage) {
    if (topbarPage.maintenance) {
      return res.redirect('/maintenance');
    }

    const file = path.join(__dirname, 'views', 'page', `${pageId}.pug`);
    const viewPath = fs.existsSync(file)
      ? `page/${pageId}` // direkt pageId verwenden
      : 'page/route/route-maintenance';

    return res.render(viewPath, { title: topbarPage.title });
  }

  // Kapitel/Subseite prüfen
  const result = findPageById(pageId);
  if (!result) {
    return res.redirect('/404');
  }

  const { chapter, subObj } = result;

  // Wartung prüfen
  if (chapter.maintenance || (subObj && subObj.maintenance)) {
    return res.redirect('/maintenance');
  }

  const folder = chapter.id;
  const file = path.join(__dirname, 'views', 'page', folder, `${pageId}.pug`);

  const viewPath = fs.existsSync(file)
    ? `page/${folder}/${pageId}`
    : 'page/route/route-maintenance';

  res.render(viewPath, { title: subObj ? subObj.title : chapter.title });
});



// ─────────────────────────────────────────────────────────────
// 🚀 SERVER STARTEN
// ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}/`);
});