document.addEventListener("DOMContentLoaded", () => {
  // Górny przycisk w nav
  const topButton = document.querySelector(".nav-btn");
  console.log("topButton:", topButton);

  topButton.addEventListener("click", () => {
    alert("Klik w górny Kontakt działa!");
    console.log("Klik w górny Kontakt działa");
  });

  // Dolny przycisk w sekcji support
  const supportButton = document.querySelector(".support button");
  console.log("supportButton:", supportButton);

  supportButton.addEventListener("click", () => {
    alert("Klik w dolny Kontakt działa!");
    console.log("Klik w dolny Kontakt działa");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.querySelector(".nav-btn");
  const supportSection = document.querySelector(".support");

  topButton.addEventListener("click", () => {
    if (supportSection.style.display === "none") {
      supportSection.style.display = "block";
    } else {
      supportSection.style.display = "none";
    }
  });
});
