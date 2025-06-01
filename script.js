// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX - 20 + "px";
    cursorFollower.style.top = e.clientY - 20 + "px";
  }, 100);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Scroll Animations
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

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Animate submit button
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.style.background = "#0d5bd9";

    // Simulate form submission
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

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const home = document.getElementById("home");
  home.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add hover effects to interactive elements
document
  .querySelectorAll(".project-card, .skill, .education-item")
  .forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursorFollower.style.transform = "scale(1.5)";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursorFollower.style.transform = "scale(1)";
    });
  });

// Initialize first section as visible
document.getElementById("home").classList.add("visible");
