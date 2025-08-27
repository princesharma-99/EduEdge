// =============================
// 📬 Contact Modal Logic
// =============================

// Elements
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("contactModal");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMessage");

// Open contact modal with animation
openModal?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("d-none");             // Show overlay
  setTimeout(() => {
    modal.classList.add("show");                // Animate fade-in
  }, 10);
});

// Close contact modal with fade-out
closeModal?.addEventListener("click", () => {
  modal.classList.remove("show");               // Start animation
  setTimeout(() => {
    modal.classList.add("d-none");              // Fully hide after transition
  }, 400);
});

// AJAX form submission using fetch API
form?.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      formMsg.classList.remove("d-none", "alert-danger");
      formMsg.classList.add("alert-success");
      formMsg.textContent = "✅ Thank you! Your message has been sent successfully.";
    } else {
      formMsg.classList.remove("d-none", "alert-success");
      formMsg.classList.add("alert-danger");
      formMsg.textContent = "❌ Oops! Something went wrong.";
    }
  })
  .catch(() => {
    formMsg.classList.remove("d-none", "alert-success");
    formMsg.classList.add("alert-danger");
    formMsg.textContent = "❌ Network error. Please try again.";
  });
});


// =============================
// ℹ️ About Us Modal Logic
// =============================

const openAbout = document.getElementById("openAboutModal");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAboutModal");

// Open about modal with animation
openAbout?.addEventListener("click", (e) => {
  e.preventDefault();
  aboutModal.classList.remove("d-none");
  setTimeout(() => {
    aboutModal.classList.add("show"); // fade & scale
  }, 10);
});

// Close about modal with fade-out
closeAbout?.addEventListener("click", () => {
  aboutModal.classList.remove("show");
  setTimeout(() => {
    aboutModal.classList.add("d-none");
  }, 400);
});


// =============================
// ⏳ Loader Bar on Page Load
// =============================

window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.id = "loader-bar";
  document.body.appendChild(loader);

  // Animate loader bar fade
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 1000);
  }, 2000); // Adjust duration as needed
});
