// Dropdown navigation
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownList = dropdown.querySelector(".dropdown__list");
  dropdown.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown") || e.target.tagName === "I") {
      dropdownList.classList.toggle("active");
    }
  });
});

// Dropdown close
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    const dropdownList = dropdown.querySelector(".dropdown__list");
    if (!dropdown.contains(e.target)) {
      dropdownList.classList.remove("active");
    }
  });
});


