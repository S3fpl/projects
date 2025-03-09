// Contact Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Set up contact form submission
  setupContactForm()

  // Set up FAQ toggles
  setupFaqToggles()

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    document.getElementById("theme-toggle-btn").innerHTML = '<i class="fas fa-sun"></i>'
  }
})

// Set up contact form submission
function setupContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // In a real application, this would send the form data to a server
      // For this demo, we'll just show an alert
      alert(`شكراً ${name} على تواصلك معنا! سنرد عليك قريباً.`)

      // Reset form
      contactForm.reset()
    })
  }
}

// Set up FAQ toggles
function setupFaqToggles() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")
    const toggle = item.querySelector(".faq-toggle")

    question.addEventListener("click", () => {
      // Toggle answer visibility
      answer.style.display = answer.style.display === "block" ? "none" : "block"

      // Toggle icon
      if (answer.style.display === "block") {
        toggle.innerHTML = '<i class="fas fa-minus"></i>'
      } else {
        toggle.innerHTML = '<i class="fas fa-plus"></i>'
      }
    })
  })
}

