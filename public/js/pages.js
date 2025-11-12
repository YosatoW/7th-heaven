// /public/js/pages.js

// JSON laden
const pages = JSON.parse(fs.readFileSync('./public/json/pages.json', 'utf8'));
app.locals.pages = pages;

// Beispiel: Startseite
app.get('/', (req, res) => {
  const sliderData = JSON.parse(fs.readFileSync('./public/json/slider.json', 'utf-8'));
  res.render('home', {
    sliders: sliderData.sliders,
    pages: pages.chapters // Navigation verfügbar machen
  });
});
