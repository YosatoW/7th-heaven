document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector("#imageModal .close");

  // Alle Bilder, die das Modal öffnen dürfen
  const clickImages = document.querySelectorAll(".image-click");

  clickImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  // Schließen mit X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Schließen bei Klick ausserhalb des Bildes
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ESC zum Schließen
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
