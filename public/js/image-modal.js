
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector("#imageModal .close");
  const prevBtn = document.querySelector("#imageModal .prev");
  const nextBtn = document.querySelector("#imageModal .next");

  // Alle Bilder, die das Modal öffnen dürfen
  const clickImages = document.querySelectorAll(".image-click");
  const images = Array.from(clickImages).map(img => img.src);
  let currentIndex = 0;

  // Öffnen
  clickImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      currentIndex = index;
      modalImg.src = images[currentIndex];
    });
  });
  
  // Navigation
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
  });


  // Schließen
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
  document.addEventListener("keyup", e => { if (e.key === "Escape") modal.style.display = "none"; });
});
