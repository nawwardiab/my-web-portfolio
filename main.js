const burgerMenu = document.querySelector(".burger-menu"); // Fix the correct selector for the burger menu
const navBar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar-list");
const navLinks = document.querySelectorAll(".navbar-list--link"); // Select all links in the navbar
const body = document.querySelector("body");
const main = document.querySelector(".main");
const skillsSection = document.querySelector(".skills-section");
const experienceSection = document.querySelector(".experience-section");
const projectsSection = document.querySelector(".projects-section");
const contactSection = document.querySelector(".contact-section");
const btns = document.querySelectorAll(".btn"); // Selecting all buttons
const plusIcon = document.querySelector(".exp-ticket.contact .fa-plus"); // Select the plus icon

document.addEventListener("DOMContentLoaded", function () {
  // Navigation bar click event
  navBar.addEventListener("click", (e) => {
    let section;

    if (e.target.classList.contains("home")) {
      section = main;
    } else if (e.target.classList.contains("skills")) {
      section = skillsSection;
    } else if (e.target.classList.contains("experience")) {
      section = experienceSection;
    } else if (e.target.classList.contains("projects")) {
      section = projectsSection;
    } else if (e.target.classList.contains("contact")) {
      section = contactSection;
    }

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  // Button click event for primary and secondary buttons
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      let section;

      if (e.target.classList.contains("primary-btn")) {
        section = skillsSection;
      } else if (
        e.target.classList.contains("secondary-btn") ||
        e.target.classList.contains("message--btn")
      ) {
        section = contactSection;
      }

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Click event for exp-ticket with plus icon to scroll to contact section
  if (plusIcon) {
    plusIcon.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // Toggle the navbar on burger menu click
  burgerMenu.addEventListener("click", () => {
    navbarList.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll"); // Optional: prevent body from scrolling when menu is open
  });

  // Close the navbar when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      console.log("Nav link clicked!"); // Debugging line
      navbarList.classList.remove("open");
      burgerMenu.classList.remove("open");
      document.body.classList.remove("no-scroll"); // Re-enable scrolling
      // Allow default action to take place (i.e., navigate to the section)
    });
  });
});
