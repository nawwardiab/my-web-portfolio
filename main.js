const navBar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const skillsSection = document.querySelector(".skills-section");
const experienceSection = document.querySelector(".experience-section");
const projectsSection = document.querySelector(".projects-section");
const contactSection = document.querySelector(".contact-section");
const btns = document.querySelectorAll(".btn"); // Selecting all buttons
const plusIcon = document.querySelector(".exp-ticket.contact .fa-plus"); // Select the plus icon

const navbarHeight = navBar.offsetHeight;

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
});
