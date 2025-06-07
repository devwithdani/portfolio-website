/* ==========================================================================
   Navigation
   ========================================================================== */
// Navigation link click handlers
const navLinks = document.querySelectorAll(".desktop-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Update active navigation based on scroll position
function updateActiveNav() {
  const scrollPosition = window.scrollY + 100;
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', () => {
  updateActiveNav();
});

/* ==========================================================================
   Experience Tabs
   ========================================================================== */
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and panes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Show corresponding tab pane
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

/* ==========================================================================
   Mouse Light Effect
   ========================================================================== */
// Wacht tot DOM volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
  // Direct initialiseren en op window object zetten voor debugging
  const mouseLight = document.querySelector('.mouse-light');
  window.mouseLightElement = mouseLight;
  
  if (mouseLight) {
    console.log('Mouse light element gevonden, activeren...');
    
    // Initialiseer startpositie in het midden
    mouseLight.style.setProperty('--x', '50%');
    mouseLight.style.setProperty('--y', '50%');
    
    // Listener voor muisbewegingen
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Update de CSS variabelen
      mouseLight.style.setProperty('--x', `${x}%`);
      mouseLight.style.setProperty('--y', `${y}%`);
    });
    
    // Zorg dat effect werkt bij pagina load
    mouseLight.style.opacity = '1';
  } else {
    console.error('Mouse light element niet gevonden in de DOM');
  }
});
