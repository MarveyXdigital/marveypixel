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
  alert(`Booking request for ${service} Photography. Please contact us at marveypixel@gmail.com or call +2348143212398 to schedule your session.`);
}

/* NEWSLETTER */
function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing! We'll send photography tips and updates to ${email}.`);
  event.target.reset();
}

// Add event listeners for newsletter forms
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', subscribeNewsletter);
  });
});
