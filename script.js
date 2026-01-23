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
const featuresData = [
  {
    id: 1,
    title: "Szybkość",
    text: "Strony ładują się błyskawicznie.",
  },
  {
    id: 2,
    title: "Responsywność",
    text: "Idealnie dopasowane do każdego ekranu.",
  },
  {
    id: 3,
    title: "Nowoczesność",
    text: "Aktualne trendy i czysty design.",
  },
];

const featuresSection = document.querySelector("#features");

featuresData.forEach((feature) => {
  const card = document.createElement("div");
  card.classList.add("card");

  
  card.dataset.id = feature.id;

  card.innerHTML = `
    <h3>${feature.title}</h3>
    <p>${feature.text}</p>
    <button>Dowiedz się więcej</button>
  `;

  card.addEventListener("click", () => {
    console.log("Kliknięta karta ID:", feature.id);
    alert(`Kliknięto kartę: ${feature.title}`);
  });

  featuresSection.appendChild(card);
});
