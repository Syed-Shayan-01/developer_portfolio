// --- OPTIMIZED CURSOR LOGIC ---
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (cursor) {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }
  
  if (cursorFollower) {
      cursorFollower.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }
});

document.querySelectorAll("a, button, .project-card, .skill, .education-item").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    if (cursorFollower) {
        cursorFollower.style.width = "60px";
        cursorFollower.style.height = "60px";
        cursorFollower.style.backgroundColor = "rgba(27, 112, 247, 0.1)";
    }
  });

  element.addEventListener("mouseleave", () => {
    if (cursorFollower) {
        cursorFollower.style.width = "40px";
        cursorFollower.style.height = "40px";
        cursorFollower.style.backgroundColor = "transparent";
    }
  });
});

// --- MOBILE MENU TOGGLE (NEW CODE) ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


// --- SCROLL ANIMATIONS ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// --- FORM SUBMISSION ---
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitBtn = document.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
    
      submitBtn.textContent = "Sending...";
      submitBtn.style.background = "#0d5bd9";
    
      setTimeout(() => {
        submitBtn.textContent = "Message Sent!";
        submitBtn.style.background = "#28a745";
    
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "#1b70f7";
          this.reset();
        }, 2000);
      }, 1500);
    });
}

// --- PARALLAX EFFECT ---
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const home = document.getElementById("home");
  if (home) {
    home.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

const homeSection = document.getElementById("home");
if (homeSection) homeSection.classList.add("visible");
