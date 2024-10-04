document.addEventListener("DOMContentLoaded", function () {
  // Selectors for various elements
  const burgerMenu = document.querySelector(".burger-menu"); // Burger menu icon for toggling navigation
  const navBar = document.querySelector(".navbar"); // Entire navigation bar
  const navbarList = document.querySelector(".navbar-list"); // List within the navigation bar
  const navLinks = document.querySelectorAll(".navbar-list--link"); // All links within the navbar
  const btns = document.querySelectorAll(".btn"); // All buttons on the page
  const plusIcon = document.querySelector(".exp-ticket.contact"); // Plus icon in the experience/contact section
  const infoIcons = document.querySelectorAll(".info-icon"); // All info icons for hover interactions
  const infoWindows = document.querySelectorAll(".info-window"); // Corresponding info windows for each icon
  const scrollToTop = document.querySelector("#scrollTop"); // Button to scroll back to the top of the page

  // Section selectors - Each represents different sections of the webpage
  const sections = {
    home: document.querySelector(".main"), // Home section
    skills: document.querySelector(".skills-section"), // Skills section
    experience: document.querySelector(".experience-section"), // Experience section
    projects: document.querySelector(".projects-section"), // Projects section
    contact: document.querySelector(".contact-section"), // Contact section
  };

  // Helper function for smooth scrolling to a target section
  const smoothScroll = (section) => {
    section.scrollIntoView({
      behavior: "smooth", // Ensures smooth scrolling
      block: "start", // Scrolls to the top of the section
    });
  };

  // Navigation bar click event for scrolling to the appropriate section
  navBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) smoothScroll(sections.home); // Home button
    if (e.target.classList.contains("skills")) smoothScroll(sections.skills); // Skills button
    if (e.target.classList.contains("experience"))
      smoothScroll(sections.experience); // Experience button
    if (e.target.classList.contains("projects"))
      smoothScroll(sections.projects); // Projects button
    if (e.target.classList.contains("contact")) smoothScroll(sections.contact); // Contact button
  });

  // Button click event for primary and secondary buttons on the page
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevents default behavior of anchor tags
      if (e.target.classList.contains("primary-btn"))
        smoothScroll(sections.skills); // Scroll to skills section on primary button click
      if (
        e.target.classList.contains("secondary-btn") || // Scroll to contact section on secondary or message button click
        e.target.classList.contains("message--btn")
      ) {
        smoothScroll(sections.contact);
      }
    });
  });

  // Event for plus icon to scroll to the contact section
  if (plusIcon) {
    plusIcon.addEventListener("click", (e) => {
      e.preventDefault(); // Prevents default behavior
      smoothScroll(sections.contact); // Scroll to contact section
    });
  }

  // Toggle the navigation bar on burger menu click
  burgerMenu.addEventListener("click", () => {
    navbarList.classList.toggle("open"); // Toggles the visibility of the navigation list
    burgerMenu.classList.toggle("open"); // Changes the burger icon appearance
    document.body.classList.toggle("no-scroll"); // Optionally prevent body from scrolling when menu is open
  });

  // Close the navigation bar when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarList.classList.remove("open"); // Close the navigation list
      burgerMenu.classList.remove("open"); // Reset the burger icon appearance
      document.body.classList.remove("no-scroll"); // Re-enable scrolling on the body
    });
  });

  // Hover event listeners for info icons to show corresponding info windows
  infoIcons.forEach((icon, index) => {
    const infoWindow = infoWindows[index]; // Get the corresponding info window for each icon
    icon.addEventListener("mouseenter", function () {
      infoWindow.classList.remove("hidden"); // Show the info window when hovering over the icon
    });
    icon.addEventListener("mouseleave", function () {
      infoWindow.classList.add("hidden"); // Hide the info window when mouse leaves the icon
    });
  });

  // Scroll to the top functionality
  scrollToTop.addEventListener("click", () => {
    document.body.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the top of the page
  });

  // Toggle visibility of the scrollToTop button based on scroll position
  document.addEventListener("scroll", () => {
    scrollToTop.style.display = window.scrollY === 0 ? "none" : "block"; // Only show the button when the user has scrolled down
  });
  /*
//  Form Error Handling
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const form = event.target;

      // Use fetch to send the data to Formspree
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Thank you for your message!");
            form.reset(); // Reset the form after successful submission
          } else {
            alert("Oops! There was a problem submitting your message.");
          }
        })
        .catch((error) => {
          alert("Oops! There was a problem submitting your message.");
        });
    });
    */
});
