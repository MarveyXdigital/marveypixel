function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
/* FILTER IMAGES */
function filterImages(category) {
  const images = document.querySelectorAll('.image');

  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

/* LIGHTBOX */
function openLightbox(image) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = image.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

/* BOOKING */
function bookService(service) {
  alert(`Booking request for ${service} Photography. Please contact us at contact@marveypixel.com or call +1-234-567-8900 to schedule your session.`);
}
