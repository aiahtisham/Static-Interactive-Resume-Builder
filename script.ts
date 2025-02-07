document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const toggleButton = document.getElementById("toggleSkills");

  if (toggleButton && skillsSection) {
      toggleButton.addEventListener("click", () => {
          if (skillsSection.style.display === "none") {
              skillsSection.style.display = "block";
              toggleButton.textContent = "Hide Skills";
          } else {
              skillsSection.style.display = "none";
              toggleButton.textContent = "Show Skills";
          }
      });
  }
});
