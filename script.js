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
  const message = `Hi, I'm interested in booking ${service} Photography. Please contact me to schedule a session.`;
  const whatsappUrl = `https://wa.me/2348143212398?text=${encodeURIComponent(message)}`;
  const gmailUrl = `mailto:marveypixel@gmail.com?subject=Booking Request for ${service} Photography&body=${encodeURIComponent(message)}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Optionally open Gmail after a short delay
  setTimeout(() => {
    window.open(gmailUrl, '_blank');
  }, 500);
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

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
});
