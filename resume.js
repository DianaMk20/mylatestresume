// Select the menu icon, navigation links, and the close icon
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Select the "See more" button and the extra content
const seeMoreBtn = document.querySelector(".see-more-btn");
const extraContent = document.querySelector(".extra-content");

// Toggle the extra content when the button is clicked
seeMoreBtn.addEventListener("click", () => {
  const isVisible = extraContent.classList.toggle("visible");
  extraContent.style.display = isVisible ? "block" : "none";
  seeMoreBtn.textContent = isVisible ? "See less..." : "See more...";
});

// Function to toggle the menu
const toggleMenu = () => {
  const isActive = navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
  menuIcon.setAttribute("aria-expanded", isActive); // Update aria-expanded
};

// Function to open the resume PDF
function openResume() {
  window.open("newresume.pdf", "_blank"); // Update the path to match your PDF file name
}

// Toggle the menu when the menu icon is clicked
menuIcon.onclick = toggleMenu;

// Close the menu when the close icon is clicked
closeIcon.onclick = () => {
  navLinks.classList.remove("active");
  menuIcon.classList.remove("active");
  menuIcon.setAttribute("aria-expanded", "false"); // Update aria-expanded
};

// Close the menu when clicking outside of the navigation links
document.addEventListener("click", function (e) {
  if (
    !menuIcon.contains(e.target) &&
    !navLinks.contains(e.target) &&
    navLinks.classList.contains("active")
  ) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  }
});

// Close the menu on Escape key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  }
});

// Select the form element
const contactForm = document.querySelector("form");

// Function to handle form submission
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(contactForm);

  try {
    // Send the form data to Formspree
    const response = await fetch("https://formspree.io/f/xjkvgkdq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      alert("Message sent successfully!");
      contactForm.reset(); // Reset the form
    } else {
      alert("There was an issue sending your message. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again later.");
  }
});
