// ✅ SCRIPT FOR NAVIGATION INTERACTION

const navLinks = document.querySelectorAll(".desktop-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Toggle for mobile navigation (optional burger if you add it later)
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
}

// Smooth scroll behavior is already enabled via CSS (scroll-behavior: smooth)

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
  (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the current theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

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

// Experience Tabs
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

function updateActiveNav() {
  const scrollPosition = window.scrollY + 100;

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
