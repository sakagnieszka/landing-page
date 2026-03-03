document.addEventListener("DOMContentLoaded", () => {
  // ===== ELEMENTY =====
  const topButton = document.querySelector(".nav-btn");
  const supportSection = document.querySelector(".support");
  const supportButton = document.querySelector(".support button");
  const supportTitle = document.querySelector(".support h2");
  const featuresSection = document.querySelector("#features");

  console.log("topButton:", topButton);
  console.log("supportButton:", supportButton);
  // ===== STAN =====
  let activeCardId = null;
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
  // ===== RENDER UI =====
  function renderCards() {
    featuresSection.innerHTML = ""; // czyścimy sekcję

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
        // 1. usuwamy active ze wszystkich kart
        const allCards = document.querySelectorAll(".card");
        allCards.forEach((c) => c.classList.remove("active"));

        // 2. dodajemy active tylko klikniętej
        card.classList.add("active");

        console.log("Aktywna karta:", feature.title);
      });

      featuresSection.appendChild(card);
    });
  } // Tu zamykamy funkcje

  // uruchamiamy render
  renderCards();
  // ===== GÓRNY PRZYCISK =====
  topButton.addEventListener("click", () => {
    supportSection.style.display =
      supportSection.style.display === "none" ? "block" : "none";
  });

  // ===== DOLNY PRZYCISK – zmiana treści + styl =====
  supportButton.addEventListener("click", () => {
    supportTitle.textContent = "Dziękujemy za kontakt!";
    supportSection.classList.toggle("highlight");
  });
});
