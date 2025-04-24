// Display greeting based on time of day
function showGreeting() {
  const greetingEl = document.createElement("div");
  const hour = new Date().getHours();
  let message = "Hello!";

  if (hour < 12) {
    message = "Good Morning!";
  } else if (hour < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  greetingEl.textContent = message;
  greetingEl.style.position = "fixed";
  greetingEl.style.top = "10px";
  greetingEl.style.right = "10px";
  greetingEl.style.background = "#00aaff";
  greetingEl.style.color = "#fff";
  greetingEl.style.padding = "0.5rem 1rem";
  greetingEl.style.borderRadius = "5px";
  greetingEl.style.zIndex = "999";
  document.body.appendChild(greetingEl);

  setTimeout(() => greetingEl.remove(), 4000);
}

// Form validation for contact page
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const phonePattern = /^\d{9,14}$/;

      if (!name || !email || !phone || !message) {
        alert("All fields must be filled.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Enter a valid phone number.");
        return;
      }

      alert("Your message has been sent successfully!");
      contactForm.reset();
    });
  }

  // Optional: Toggle theme (light/dark)
  const toggle = document.getElementById("toggleTheme");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }

  // Optional: Dynamic interaction with projects
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("highlight");
    });
  });
});
