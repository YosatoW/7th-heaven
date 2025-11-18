// /public/js/newsletter.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  const popup = document.querySelector(".popup");
  // const closeBtn = popup?.querySelector(".close");
  const okBtn = popup?.querySelector("button");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail")?.value?.trim();

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (data.success) {
        popup.style.display = "flex";
        okBtn?.addEventListener("click", () => (popup.style.display = "none"), { once: true });
        // closeBtn?.addEventListener("click", () => (popup.style.display = "none"), { once: true });
        form.reset();
      } else {
        alert(data.message || "Fehler bei der Anmeldung.");
      }
    } catch (err) {
      console.error(err);
      alert("Es ist ein Fehler aufgetreten.");
    }
  });
});