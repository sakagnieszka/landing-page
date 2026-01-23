document.addEventListener("DOMContentLoaded", () => {
  // ===== ELEMENTY =====
  const topButton = document.querySelector(".nav-btn");
  const supportSection = document.querySelector(".support");
  const supportButton = document.querySelector(".support button");
  const supportTitle = document.querySelector(".support h2");

  console.log("topButton:", topButton);
  console.log("supportButton:", supportButton);

  // ===== GÓRNY PRZYCISK – toggle sekcji support =====
  topButton.addEventListener("click", () => {
    if (supportSection.style.display === "none") {
      supportSection.style.display = "block";
    } else {
      supportSection.style.display = "none";
    }
  });

  // ===== DOLNY PRZYCISK – zmiana treści + styl =====
  supportButton.addEventListener("click", () => {
    supportTitle.textContent = "Dziękujemy za kontakt!";
    supportSection.classList.toggle("highlight");
  });
});
