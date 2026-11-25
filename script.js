
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // NUESTRO PEQUEÑO UNIVERSO 💙
  // =====================================

  // CONTRASEÑA
  const passwordCorrect = "salchicha01";

  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");
  const passwordInput = document.getElementById("passwordInput");
  const enterButton = document.getElementById("enterButton");
  const errorMessage = document.getElementById("errorMessage");

  // =====================================
  // MÚSICA
  // =====================================

  const songs = [
    {
      name: "My Confession 💙",
      id: "FgMYAz6pTNk"
    },
    {
      name: "Mrs Magic ✨",
      id: "r22AG0WKV1M"
    }
  ];

  const musicContainer = document.getElementById("musicContainer");
  const musicPlayer = document.getElementById("musicPlayer");

  function playSong(index) {
    const song = songs[index];
    if (!song || !musicPlayer) return;

    musicPlayer.src =
      "https://www.youtube-nocookie.com/embed/" +
      song.id +
      "?autoplay=1&rel=0";

    document.querySelectorAll(".song-button").forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });
  }

  songs.forEach((song, index) => {
    const button = document.createElement("button");

    button.className = "song-button";
    button.textContent = song.name;

    button.addEventListener("click", () => {
      playSong(index);
    });

    musicContainer.appendChild(button);
  });

  // =====================================
  // ENTRAR A LA PÁGINA
  // =====================================

  function enterUniverse() {
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === passwordCorrect) {
      welcomeScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");

      errorMessage.textContent = "";

      playSong(0);
    } else {
      errorMessage.textContent =
        "Contraseña incorrecta, intenta otra vez 💙";

      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  enterButton.addEventListener("click", enterUniverse);

  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      enterUniverse();
    }
  });

  // =====================================
  // PLANETAS
  // =====================================

  const planets = [
    {
      icon: "🌍",
      name: "Nuestro comienzo",
      description:
        "Todo empezó en Genshin, cuando el nañio pidió entrar a mi mundo."
    },
    {
      icon: "🏜️",
      name: "El desierto de Sumeru",
      description:
        "Un lugar inesperado donde comenzó una conversación que recuerdo con cariño."
    },
    {
      icon: "🌙",
      name: "Nuestra llamada",
      description:
        "Ese momento en que hablamos por videollamada y me dio vergüenza."
    },
    {
      icon: "💙",
      name: "Nuestro 25 de junio",
      description:
        "El día en que comenzamos esta bonita historia."
    },
    {
      icon: "✨",
      name: "Cinco meses",
      description:
        "Cinco meses de momentos, risas, juegos y recuerdos juntos."
    }
  ];

  const planetsContainer = document.getElementById("planetsContainer");

  planets.forEach((planet) => {
    const card = document.createElement("div");

    card.className = "planet-card";

    card.innerHTML = `
      <div class="planet-icon">${planet.icon}</div>
      <h3>${planet.name}</h3>
      <p>${planet.description}</p>
    `;

    planetsContainer.appendChild(card);
  });

  // =====================================
  // CARTITAS
  // =====================================

  const letters = [
    {
      title: "Para mi nañio 💙",
      message:
        "Gracias por llegar a mi vida y convertir momentos sencillos en recuerdos especiales. Me gusta compartir mis días contigo."
    },
    {
      title: "Algo que me encanta ✨",
      message:
        "Me encanta lo bueno que eres jugando, pero también la forma en que me demuestras tu cariño."
    },
    {
      title: "Un recuerdo nuestro 🌙",
      message:
        "Desde aquel día en el desierto de Sumeru hasta ahora, hemos creado una historia llena de momentos que guardo con mucho cariño."
    },
    {
      title: "Una frase especial 💌",
      message:
        "Esa raya en la ceja se ve bien. JAJAJA, tenía que ponerlo aquí."
    }
  ];

  const lettersContainer = document.getElementById("lettersContainer");

  letters.forEach((letter) => {
    const card = document.createElement("div");

    card.className = "letter-card";

    card.innerHTML = `
      <h3>💌 ${letter.title}</h3>
      <p>Un sobre esperando ser abierto...</p>
      <button class="open-letter">Abrir cartita</button>
    `;

    card.querySelector(".open-letter").addEventListener("click", () => {
      openModal(letter.title, letter.message);
    });

    lettersContainer.appendChild(card);
  });

  // =====================================
  // GALERÍA DE FOTOS
  // =====================================

  const photos = [
    { file: "roblox1.jpg", caption: "Un recuerdo de Roblox 💙" },
    { file: "roblox2.jpg", caption: "Otro momento juntos ✨" },
    { file: "roblox3.jpg", caption: "Nuestras aventuras" },
    { file: "roblox4.jpg", caption: "Un recuerdo más" },

    { file: "minecraft1.jpg", caption: "Nuestro mundo de Minecraft 🌳" },
    { file: "minecraft2.jpg", caption: "Construyendo recuerdos" },
    { file: "minecraft3.jpg", caption: "Aventuras cuadraditas" },
    { file: "minecraft4.jpg", caption: "Un momento especial" },

    { file: "genshin1.jpg", caption: "Donde comenzó nuestra historia 🌌" },
    { file: "genshin2.jpg", caption: "Aventuras en Teyvat" },
    { file: "genshin3.jpg", caption: "Nuestro mundo favorito" },
    { file: "genshin4.jfif", caption: "Un recuerdo de Genshin 💙" }
  ];

  const photosContainer = document.getElementById("photosContainer");

  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    const image = document.createElement("img");

    image.src = "imagenes/fotos/" + photo.file;
    image.alt = photo.caption;
    image.loading = "lazy";

    image.onerror = function () {
      this.alt = "No se pudo cargar " + photo.file;
      this.style.background = "#1c3555";
    };

    const caption = document.createElement("p");
    caption.textContent = photo.caption;

    card.appendChild(image);
    card.appendChild(caption);

    photosContainer.appendChild(card);
  });

  // =====================================
  // CINCO ESTRELLAS
  // =====================================

  const starMessages = [
    "Gracias por cada risa que compartimos. 💙",
    "Me encanta tenerte en mis aventuras.",
    "Eres una parte muy bonita de mis días.",
    "Que nunca nos falten momentos para recordar.",
    "¡Felices cinco meses, mi nañio! ✨"
  ];

  const starsContainer = document.getElementById("starsContainer");
  const starProgress = document.getElementById("starProgress");
  const starMessage = document.getElementById("starMessage");

  let foundStars = 0;

  starMessages.forEach((message, index) => {
    const star = document.createElement("button");

    star.className = "star-button";
    star.textContent = "⭐";
    star.setAttribute("aria-label", "Estrella " + (index + 1));

    star.addEventListener("click", () => {
      if (star.classList.contains("found")) return;

      star.classList.add("found");
      foundStars++;

      starProgress.textContent =
        "Estrellas encontradas: " + foundStars + "/5";

      starMessage.textContent = message;

      if (foundStars === 5) {
        starMessage.textContent =
          "¡Encontraste todas las estrellas! 🌌 " +
          "¡Felices cinco meses, mi nañio! 💙";
      }
    });

    starsContainer.appendChild(star);
  });

  // =====================================
  // COFRE FINAL 🎁
  // =====================================

  const chestButton = document.getElementById("chestButton");

  chestButton.addEventListener("click", () => {
    openModal(
      "¡Felices 5 meses, mi nañio! 💙",
      "Gracias por cada partida, cada llamada, cada risa y cada momento que hemos compartido. Me alegra que aquel día en Genshin haya aceptado que entraras a mi mundo. Estos cinco meses tienen muchos recuerdos que guardo con cariño. Espero que sigamos creando muchísimos más. Te quiero mucho. Con cariño, tu ñañia. 💙"
    );
  });

  // =====================================
  // VENTANA DE MENSAJES
  // =====================================

  const messageModal = document.getElementById("messageModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeModal = document.getElementById("closeModal");

  function openModal(title, message) {
    modalTitle.textContent = title;
    modalText.textContent = message;
    messageModal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => {
    messageModal.classList.add("hidden");
  });

  messageModal.addEventListener("click", (event) => {
    if (event.target === messageModal) {
      messageModal.classList.add("hidden");
    }
  });

});