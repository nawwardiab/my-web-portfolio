const navBar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const skillsSection = document.querySelector(".skills-section");
const experienceSection = document.querySelector(".experience-section");
const projectsSection = document.querySelector(".projects-section");
const contactSection = document.querySelector(".contact-section");

// Set an offset equal to the navbar height
const navbarHeight = navBar.offsetHeight;
document.addEventListener("DOMContentLoaded", function () {
  navBar.addEventListener("click", (e) => {
    let section;

    switch (e.target.classList.value) {
      case "home":
        section = main;
        break;
      case "skills":
        section = skillsSection;
        break;
      case "experience":
        section = experienceSection;
        break;
      case "projects":
        section = projectsSection;
        break;
      case "contact":
        section = contactSection;
        break;
    }

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});
