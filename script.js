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

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Function to toggle read more/less
document.addEventListener('DOMContentLoaded', () => {
  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const postId = button.getAttribute('data-post');
      const fullContent = document.querySelector(`[data-post="${postId}"]`).previousElementSibling; // Targets .full-content

      if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        button.textContent = 'Read Less';
      } else {
        fullContent.style.display = 'none';
        button.textContent = 'Read More';
      }
    });
  });
});
