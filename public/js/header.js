// puplic/js/header.js

// Scroll-Verhalten für Header-Hintergrund
document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// menüanzeige für mobile geräte
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Mobile-Menü Toggle
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Klick außerhalb schließt Menü
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
      mobileMenu.classList.remove('show');
      document.querySelectorAll('.sub').forEach(sub => sub.classList.remove('show'));
    }
  });

  // Submenü-Logik für Touch-Geräte und große Tablets
  document.querySelectorAll('.nav-area .menu-chapter > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const submenu = link.nextElementSibling;

      if (submenu) {
        // Prüfen, ob Gerät Touch hat oder kein Hover möglich ist
        if (window.matchMedia('(hover: none)').matches) {
          e.preventDefault(); // verhindert Navigation
          // Alle anderen Submenüs schließen
          document.querySelectorAll('.nav-area .menu-chapter ul.sub').forEach(sub => {
            if (sub !== submenu) sub.classList.remove('show');
          });
          submenu.classList.toggle('show');
        }
      }
    });
  });
});



