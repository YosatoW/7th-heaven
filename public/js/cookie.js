document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('cookiepopup');

  // Nur anzeigen, wenn noch nicht akzeptiert
  if (!localStorage.getItem('cookieaccepted')) {
    setTimeout(() => {
      popup.style.display = 'flex';
    }, 1000); // 1 Sekunde Verzögerung
  }
});

function closecookiepopup() {
  const popup = document.getElementById('cookiepopup');
  popup.style.display = 'none';
  localStorage.setItem('cookieaccepted', 'true');
}


// document.addEventListener('DOMContentLoaded', () => {
//   const popup = document.getElementById('cookiepopup');

//   // Pop-up immer anzeigen – keine Prüfung auf localStorage
//   setTimeout(() => {
//     popup.style.display = 'flex';
//   }, 60000); // 60 Sekunde Verzögerung
// });

// function closecookiepopup() {
//   const popup = document.getElementById('cookiepopup');
//   popup.style.display = 'none';
// }