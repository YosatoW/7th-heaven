document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const popup = document.getElementById('contactPopup');
  const closeBtn = popup?.querySelector(".close");
  const okBtn = popup?.querySelector("button");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const getValue = (name) => form.querySelector(`[name="${name}"]`)?.value?.trim() || "";
    const data = {
      firstname: getValue("firstname"),
      lastname: getValue("lastname"),
      email: getValue("email"),
      tel: getValue("tel"),
      address: getValue("address"),
      plz: getValue("plz"),
      city: getValue("city"),
      comments: getValue("comments"),
      privacy: form.querySelector('[name="privacy"]')?.checked || false
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        popup.style.display = "flex";
        okBtn?.addEventListener("click", () => popup.style.display = "none", { once: true });
        closeBtn?.addEventListener("click", () => popup.style.display = "none", { once: true });
        form.reset();
      } else {
        alert(result.message || "Fehler bei der Übermittlung.");
      }
    } catch (err) {
      console.error(err);
      alert("Es ist ein Fehler aufgetreten.");
    }
  });
});