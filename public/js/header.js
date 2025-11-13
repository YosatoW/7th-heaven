// puplic/js/header.js

// Scroll-Verhalten für Header-Hintergrund
document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Mobile & Desktop Navigation
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Guard
  if (!toggle || !mobileMenu) return;

  // Mobile-Menü Toggle
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("show");
  });

  // Klick ausserhalb schliesst Menü
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
      mobileMenu.classList.remove("show");
      document.querySelectorAll(".sub.show").forEach((sub) => sub.classList.remove("show"));
    }
  });

  // Submenü-Logik – Desktop-Bereich (.nav-area)
  // Click öffnet Submenü nur auf Geräten ohne Hover (Touch)
  document.querySelectorAll(".nav-area .menu-chapter > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const submenu = link.nextElementSibling;
      if (!submenu) return;

      // Nur auf Touch/ohne Hover das Navigieren verhindern
      if (window.matchMedia("(hover: none)").matches) {
        e.preventDefault();

        // Alle anderen Submenüs schliessen
        document
          .querySelectorAll(".nav-area .menu-chapter ul.sub.show")
          .forEach((sub) => {
            if (sub !== submenu) sub.classList.remove("show");
          });

        submenu.classList.toggle("show");
      }
    })
  });

  
  // -----------------------------
  // Submenü-Logik – Mobile-Bereich (.mobile-menu)
  // IMMER: Erster Tap öffnet Submenü, verhindert Navigation
  // -----------------------------
  mobileMenu.addEventListener("click", (e) => {
    const link = e.target.closest(".menu-chapter > a");
    if (!link) return;

    const submenu = link.nextElementSibling;
    if (!submenu) return; // Kapitel ohne Sub – normal navigieren

    // In der mobilen Navigation immer zuerst Submenü toggeln
    e.preventDefault();
    e.stopPropagation();

    // Andere Submenüs in der mobilen Navigation schliessen
    mobileMenu.querySelectorAll(".menu-chapter ul.sub.show").forEach((sub) => {
      if (sub !== submenu) sub.classList.remove("show");
    });

    submenu.classList.toggle("show");
  });
});





