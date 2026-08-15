/* ===================== FILTER IMAGES ===================== */
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

function filterDesign(category) {
  const items = document.querySelectorAll('.design-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ===================== LIGHTBOX ===================== */
function openLightbox(image) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg || !image) return;
  lightbox.style.display = 'flex';
  lightboxImg.src = image.src;
}

function openLightboxImg(el) {
  const img = el && el.querySelector('img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!img || !lightbox || !lightboxImg) return;
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.style.display = 'none';
}

/* ===================== BOOKING ===================== */
function bookService(service) {
  const message = `Hi, I'm interested in booking ${service} Photography. Please contact me to schedule a session.`;
  const whatsappUrl = `https://wa.me/2348143212398?text=${encodeURIComponent(message)}`;
  const gmailUrl = `mailto:marveypixel@gmail.com?subject=Booking Request for ${service} Photography&body=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  setTimeout(() => { window.open(gmailUrl, '_blank'); }, 500);
}

/* ===================== NEWSLETTER ===================== */
function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing! We'll send photography tips and updates to ${email}.`);
  event.target.reset();
}

/* ===================== MOBILE NAV ===================== */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

function closeMenu() {
  if (hamburger) hamburger.classList.remove('active');
  if (mobileNav) mobileNav.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  });
}

document.querySelectorAll('.mobile-nav-links a, .mobile-contact-btn').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ===================== THEME TOGGLE ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark');
      if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    }
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (icon) { icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun'); }
    });
  }
});

/* ===================== READ MORE ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const readMoreButtons = document.querySelectorAll('.read-more');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const postId = button.getAttribute('data-post');
      const fullContent = document.querySelector(`[data-post="${postId}"]`).previousElementSibling;
      if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        button.textContent = 'Read Less';
      } else {
        fullContent.style.display = 'none';
        button.textContent = 'Read More';
      }
    });
  });

  // Newsletter forms
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', subscribeNewsletter);
  });
});

/* ===================== HERO SLIDESHOW ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 5000;

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      if (indicators[currentSlide]) indicators[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active-slide');
      if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    // Start with first slide active
    slides[0].classList.add('active-slide');
    if (indicators[0]) indicators[0].classList.add('active');

    setInterval(() => goToSlide(currentSlide + 1), slideInterval);

    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => {
        goToSlide(i);
      });
    });

    // Scroll indicator
    const scrollHint = document.querySelector('.hero-scroll');
    if (scrollHint) {
      scrollHint.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
});

/* ===================== SCROLL ANIMATIONS ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const animateSections = document.querySelectorAll('.animate-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animateSections.forEach(section => observer.observe(section));
});

/* ===================== BOOKING CALENDAR ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const calendarDays = document.getElementById('calendar-days');
  const calMonthYear = document.getElementById('cal-month-year');
  const calPrev = document.getElementById('cal-prev');
  const calNext = document.getElementById('cal-next');
  const selectedDateInput = document.getElementById('selected-date');

  if (!calendarDays) return;

  let currentDate = new Date();
  let selectedDate = null;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    calMonthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    calendarDays.innerHTML = '';

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = document.createElement('button');
      day.type = 'button';
      day.className = 'cal-day empty';
      day.textContent = daysInPrevMonth - i;
      day.disabled = true;
      calendarDays.appendChild(day);
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const day = document.createElement('button');
      day.type = 'button';
      day.className = 'cal-day';
      day.textContent = d;

      const dateObj = new Date(year, month, d);
      dateObj.setHours(0, 0, 0, 0);

      if (dateObj < today) {
        day.classList.add('past');
        day.disabled = true;
      }

      if (dateObj.getDay() === 0) {
        day.classList.add('disabled');
        day.disabled = true;
      }

      if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        day.classList.add('today');
      }

      if (selectedDate &&
          d === selectedDate.getDate() &&
          month === selectedDate.getMonth() &&
          year === selectedDate.getFullYear()) {
        day.classList.add('selected');
      }

      day.addEventListener('click', () => {
        selectedDate = new Date(year, month, d);
        selectedDateInput.value = selectedDate.toLocaleDateString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        calendarDays.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
        day.classList.add('selected');
      });

      calendarDays.appendChild(day);
    }

    // Next month days
    const totalCells = firstDay + daysInMonth;
    const remaining = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= remaining; i++) {
      const day = document.createElement('button');
      day.type = 'button';
      day.className = 'cal-day empty';
      day.textContent = i;
      day.disabled = true;
      calendarDays.appendChild(day);
    }
  }

  calPrev.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  calNext.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = document.getElementById('selected-date').value;
      const time = document.getElementById('selected-time').value;
      const service = document.getElementById('service-type').value;
      const name = document.getElementById('client-name').value;
      const email = document.getElementById('client-email').value;
      const phone = document.getElementById('client-phone').value;
      const notes = document.getElementById('booking-notes').value;

      if (!date) { alert('Please select a date from the calendar.'); return; }

      const summary = document.getElementById('booking-summary');
      if (summary) {
        summary.innerHTML = `
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        `;
      }

      const modal = document.getElementById('booking-modal');
      if (modal) modal.classList.add('active');

      const message = `Hi Marvey, I'd like to book a ${service} session.\n\nDate: ${date}\nTime: ${time}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}${notes ? '\nNotes: ' + notes : ''}`;
      const whatsappUrl = `https://wa.me/2348143212398?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      bookingForm.reset();
      selectedDateInput.value = '';
      selectedDate = null;
      renderCalendar();
    });
  }
});

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.remove('active');
}

/* ===================== INVOICE GENERATOR ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const invoiceForm = document.getElementById('invoice-form');
  const invNumber = document.getElementById('inv-number');

  if (invNumber) {
    invNumber.value = 'MP-' + Date.now().toString(36).toUpperCase();
  }

  if (invoiceForm) {
    invoiceForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const clientName = document.getElementById('inv-client-name').value;
      const clientEmail = document.getElementById('inv-client-email').value;
      const clientPhone = document.getElementById('inv-client-phone').value;
      const invoiceNum = document.getElementById('inv-number').value;
      const sessionDate = document.getElementById('inv-session-date').value;
      const service = document.getElementById('inv-service').value;
      const notes = document.getElementById('inv-notes').value;

      const itemRows = document.querySelectorAll('.invoice-item-row');
      let items = [];
      let subtotal = 0;

      itemRows.forEach(row => {
        const desc = row.querySelector('.item-desc').value;
        const qty = parseInt(row.querySelector('.item-qty').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        const total = qty * price;
        items.push({ desc, qty, price, total });
        subtotal += total;
      });

      const tax = subtotal * 0.05;
      const grandTotal = subtotal + tax;

      const preview = document.getElementById('invoice-preview');
      const printBtn = document.getElementById('print-invoice-btn');

      let itemsHTML = items.map(item => `
        <tr>
          <td>${item.desc}</td>
          <td>${item.qty}</td>
          <td>₦${item.price.toLocaleString()}</td>
          <td>₦${item.total.toLocaleString()}</td>
        </tr>
      `).join('');

      preview.innerHTML = `
        <div class="invoice-doc">
          <div class="invoice-doc-header">
            <div class="invoice-doc-brand">
              <h2>Marvey<span style="color: #90EE90">Pixel</span></h2>
              <p>Professional Photography & Design Services</p>
              <p>+234 814 321 2398 | marveypixel@gmail.com</p>
            </div>
            <div class="invoice-doc-meta">
              <h4>INVOICE</h4>
              <p><strong>${invoiceNum}</strong></p>
              <p>Date: ${sessionDate ? new Date(sessionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
              <p>Due: Upon Receipt</p>
            </div>
          </div>
          <div class="invoice-doc-parties">
            <div>
              <h5>Bill To</h5>
              <p><strong>${clientName}</strong></p>
              <p>${clientEmail}</p>
              ${clientPhone ? `<p>${clientPhone}</p>` : ''}
            </div>
            <div>
              <h5>Service</h5>
              <p><strong>${service}</strong></p>
            </div>
          </div>
          <table>
            <thead>
              <tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
          </table>
          <div class="invoice-doc-total">
            <div>
              <p><span>Subtotal:</span> <strong>₦${subtotal.toLocaleString()}</strong></p>
              <p><span>VAT (5%):</span> <strong>₦${tax.toLocaleString()}</strong></p>
              <p style="margin-top:10px; font-size:18px;"><span>Total:</span> <strong style="color:#28a745">₦${grandTotal.toLocaleString()}</strong></p>
            </div>
          </div>
          ${notes ? `<div style="margin-top:20px; padding:15px; background:#f8f9fa; border-radius:8px;"><h5 style="margin-bottom:5px; color:#999; font-size:12px; text-transform:uppercase;">Notes</h5><p style="color:#555; font-size:14px;">${notes}</p></div>` : ''}
          <div style="margin-top:30px; text-align:center; color:#999; font-size:12px;">
            <p>Thank you for choosing MarveyPixel!</p>
            <p>Payment via bank transfer or WhatsApp for other payment methods.</p>
          </div>
        </div>
      `;

      if (printBtn) printBtn.style.display = '';
    });
  }
});

function addInvoiceItem() {
  const container = document.getElementById('invoice-items');
  const row = document.createElement('div');
  row.className = 'invoice-item-row';
  row.innerHTML = `
    <input type="text" placeholder="Item description" class="item-desc" required />
    <input type="number" placeholder="Qty" class="item-qty" value="1" min="1" required />
    <input type="number" placeholder="Price" class="item-price" value="0" min="0" step="0.01" required />
    <button type="button" class="remove-item-btn" onclick="removeInvoiceItem(this)"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(row);

  container.querySelectorAll('.remove-item-btn').forEach(btn => btn.style.display = 'flex');
}

function removeInvoiceItem(btn) {
  const container = document.getElementById('invoice-items');
  const rows = container.querySelectorAll('.invoice-item-row');
  if (rows.length > 1) {
    btn.closest('.invoice-item-row').remove();
    if (rows.length <= 2) {
      container.querySelector('.remove-item-btn').style.display = 'none';
    }
  }
}

function printInvoice() {
  window.print();
}

/* ===================== CLIENT GALLERY (Per-Client System) ===================== */
document.addEventListener('DOMContentLoaded', () => {
  const gateForm = document.getElementById('gate-form');
  const gallerySection = document.getElementById('client-gallery-section');
  const gateSection = document.getElementById('client-gate');
  const galleryGrid = document.getElementById('client-gallery-grid');

  let galleryItems = [];
  let selectedItems = new Set();

  function findClient(code) {
    if (typeof CLIENT_GALLERIES === 'undefined' || !Array.isArray(CLIENT_GALLERIES)) return null;
    return CLIENT_GALLERIES.find(c => c.code === code) || null;
  }

  function showWelcomeBanner(client) {
    const nameEl = document.getElementById('client-name');
    const typeEl = document.getElementById('client-session-type');
    const dateEl = document.getElementById('client-session-date');
    const countEl = document.getElementById('client-photo-count');
    const msgEl = document.getElementById('client-message');

    if (nameEl) nameEl.textContent = 'Welcome, ' + client.name + '!';
    if (typeEl) typeEl.innerHTML = '<i class="fas fa-tag"></i> ' + client.sessionType;
    if (dateEl) dateEl.innerHTML = '<i class="fas fa-calendar"></i> ' + client.date;
    if (countEl) countEl.innerHTML = '<i class="fas fa-images"></i> ' + client.photos.length + ' Photos';
    if (msgEl) msgEl.textContent = client.message || 'Your photos are ready. Select and download your favorites!';
  }

  function renderGallery(client) {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';
    galleryItems = [];

    client.photos.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'client-gallery-item';
      item.dataset.src = photo.src;
      item.innerHTML =
        '<img src="' + photo.src + '" alt="' + (photo.alt || 'Session Photo ' + (index + 1)) + '" />' +
        '<div class="cg-select-check"><i class="fas fa-check"></i></div>' +
        '<div class="cg-overlay">' +
          '<i class="fas fa-download cg-download-single" onclick="event.stopPropagation(); downloadSingle(\'' + photo.src + '\')"></i>' +
        '</div>';

      item.addEventListener('click', () => {
        const src = item.dataset.src;
        if (selectedItems.has(src)) {
          selectedItems.delete(src);
          item.classList.remove('selected');
        } else {
          selectedItems.add(src);
          item.classList.add('selected');
        }
        updateSelectedCount();
      });

      galleryGrid.appendChild(item);
      galleryItems.push(item);
    });

    selectedItems.clear();
    updateSelectedCount();
    const btn = document.getElementById('select-all-btn');
    if (btn) btn.innerHTML = '<i class="fas fa-check-double"></i> Select All';
  }

  function updateSelectedCount() {
    const countEl = document.getElementById('selected-count');
    const downloadBtn = document.getElementById('download-selected-btn');
    if (countEl) countEl.textContent = selectedItems.size;
    if (downloadBtn) downloadBtn.disabled = selectedItems.size === 0;
  }

  function authenticateClient(client) {
    if (gateSection) gateSection.style.display = 'none';
    if (gallerySection) gallerySection.style.display = '';
    showWelcomeBanner(client);
    renderGallery(client);
    localStorage.setItem('gallery_client_code', client.code);
  }

  if (gateForm) {
    gateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const password = document.getElementById('gallery-password').value.trim();
      const gateError = document.getElementById('gate-error');

      const client = findClient(password);
      if (client) {
        if (gateError) gateError.style.display = 'none';
        authenticateClient(client);
      } else {
        if (gateError) gateError.style.display = 'block';
      }
    });
  }

  const savedCode = localStorage.getItem('gallery_client_code');
  if (savedCode) {
    const client = findClient(savedCode);
    if (client) {
      authenticateClient(client);
    } else {
      localStorage.removeItem('gallery_client_code');
    }
  }

  window.toggleSelectAll = () => {
    if (galleryItems.length === 0) return;
    const allSelected = selectedItems.size === galleryItems.length;
    if (allSelected) {
      selectedItems.clear();
      galleryItems.forEach(item => item.classList.remove('selected'));
    } else {
      galleryItems.forEach(item => {
        selectedItems.add(item.dataset.src);
        item.classList.add('selected');
      });
    }
    updateSelectedCount();
    const btn = document.getElementById('select-all-btn');
    if (btn) btn.innerHTML = allSelected ?
      '<i class="fas fa-check-double"></i> Select All' :
      '<i class="fas fa-times"></i> Deselect All';
  };

  window.downloadSelected = () => {
    selectedItems.forEach(src => {
      const a = document.createElement('a');
      a.href = src;
      a.download = src.split('/').pop();
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  window.downloadSingle = (src) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = src.split('/').pop();
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  window.lockGallery = () => {
    localStorage.removeItem('gallery_client_code');
    selectedItems.clear();
    if (galleryGrid) galleryGrid.innerHTML = '';
    if (gateSection) gateSection.style.display = '';
    if (gallerySection) gallerySection.style.display = 'none';
    const pwInput = document.getElementById('gallery-password');
    if (pwInput) pwInput.value = '';
    const gateError = document.getElementById('gate-error');
    if (gateError) gateError.style.display = 'none';
  };
});

function toggleGatePassword(event) {
  const input = document.getElementById('gallery-password');
  if (!input) return;
  const btn = event && event.currentTarget ? event.currentTarget.querySelector('i') : null;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) {
      btn.classList.remove('fa-eye');
      btn.classList.add('fa-eye-slash');
    }
  } else {
    input.type = 'password';
    if (btn) {
      btn.classList.remove('fa-eye-slash');
      btn.classList.add('fa-eye');
    }
  }
}
