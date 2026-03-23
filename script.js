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
      liked: false
    },
    {
      id: 2,
      title: "Responsywność",
      text: "Idealnie dopasowane do każdego ekranu.",
      liked: false
    },
    {
      id: 3,
      title: "Nowoczesność",
      text: "Aktualne trendy i czysty design.",
      liked: false
    },
  ];
  // ===== RENDER UI =====
  function renderCards() {
    featuresSection.innerHTML = ""; // czyścimy sekcję

    featuresData.forEach((feature) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.id = feature.id;
      // UI ZALEŻY OD STATE
      if (feature.id === activeCardId) 
        card.classList.add("active");
      if (feature.liked) card.classList.add("liked");
      
      card.innerHTML = `
    <h3>${feature.title}</h3>
    <p>${feature.text}</p>
    <button class="like-btn">${feature.liked ? "❤️" : "🤍"}
    </button>
  `;
 // Klik na kartę → toggle active
      card.addEventListener("click", () => {
        if (activeCardId === feature.id) {
          activeCardId = null;
        } else { activeCardId = feature.id;
        }
        // !render od nowa
        renderCards();
      });
// Klik na przycisk serduszko → toggle liked
const likeBtn = card.querySelector(".like-btn");
likeBtn.addEventListener("click", (e) => {
  e.stopPropagation();// nie zmienia active przy kliknięciu serduszka
  feature.liked = !feature.liked;
  renderCards();
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
