// --- OPTIMIZED CURSOR LOGIC ---
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Use translate3d for better performance (GPU)
  // No setTimeout used here = NO LAG
  if (cursor) {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }
  
  if (cursorFollower) {
      // Follower follows smoothly because of CSS transition, not JS delay
      cursorFollower.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }
});

// Cursor Hover Effects
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

// --- PARALLAX EFFECT FOR HERO SECTION ---
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const home = document.getElementById("home");
  if (home) {
    home.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Initialize first section as visible
const homeSection = document.getElementById("home");
if (homeSection) homeSection.classList.add("visible");
