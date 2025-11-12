// /public/js/sliders.js

document.addEventListener('DOMContentLoaded', () => {
  const sliders = window.sliders || [];

  sliders.forEach(slider => {
    if (slider.type === 'thumbnail') {
      // Thumbnail-Slider (mit Vorschaubildern)
      const main = new Splide(`#${slider.id}-main`, {
        type: 'loop',       // Endlosschleife
        heightRatio: 0.5,   // Verhältnis Höhe zu Breite
        pagination: false,  // Keine Pagination
        arrows: true,      // Keine Pfeile
        cover: true,        // Bilder im Container skalieren
        autoplay: true,     // Automatischer Übergang
        interval: 5000,     // Zeit zwischen den Übergängen
        speed: 1000,        // Übergangsgeschwindigkeit
        pauseOnHover: false,  // Nicht anhalten bei Hover
        resetProgress: false, // Fortschritt nicht zurücksetzen
      });

      const thumbs = new Splide(`#${slider.id}-thumbs`, {
        fixedWidth: 100,    // Feste Breite der Thumbnails
        fixedHeight: 64,    // Feste Höhe der Thumbnails
        isNavigation: true, // Als Navigation verwenden
        gap: 10,            // Abstand zwischen den Thumbnails
        focus: 'center',    // Zentrieren des aktiven Thumbnails
        pagination: false,  // Keine Pagination
        cover: true,        // Bilder im Container skalieren
        arrows: false,      // Keine Pfeile
      });

      main.sync(thumbs);
      main.mount();
      thumbs.mount();
    } else {
      // Standard-Slider
      const instance = new Splide(`#${slider.id}`, {
        type: 'loop',
        perPage: 1,
        pagination: false,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        arrows: false,
      });

      instance.mount();
    }
  });

  // AutoScroll nur auf zusätzliche .splide-Slider anwenden
  document.querySelectorAll('.splide').forEach(el => {
    new Splide(el, {
      type: 'loop',
      perPage: 3,
      gap: '1rem',
      autoplay: true,
    }).mount({ AutoScroll: { speed: 1 } });
  });
});