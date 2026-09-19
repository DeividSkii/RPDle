
const CHARACTERS = [
  {
    id: 1,
    name: "Kethryx Kinji",
    team: "4Team",
    image: null,
    system: "D&D 5e",
    gender: "Masculino",
    age: 27,
    occupation: "Aventureiro",
    affiliation: "4Team",
    status: "Vivo"
  },
  {
    id: 2,
    name: "Olmar Coggrave",
    team: "4Team",
    image: null,
    system: "D&D 5e",
    gender: "Masculino",
    age: 31,
    occupation: "Bardo",
    affiliation: "4Team",
    status: "Vivo"
  },
  {
    id: 3,
    name: "Mascarado",
    team: "Penas de Morte",
    image: null,
    system: "D&D 5e",
    gender: "Masculino",
    age: 40,
    occupation: "Desconhecida",
    affiliation: "Penas de Morte",
    status: "Desconhecido"
  },
  {
    id: 4,
    name: "Sarali",
    team: "Penas de Morte",
    image: null,
    system: "D&D 5e",
    gender: "Feminino",
    age: 24,
    occupation: "Aventureira",
    affiliation: "Penas de Morte",
    status: "Vivo"
  },
  {
    id: 5,
    name: "Jojo",
    team: "Penas de Morte",
    image: null,
    system: "D&D 5e",
    gender: "Masculino",
    age: 19,
    occupation: "Ladino",
    affiliation: "Penas de Morte",
    status: "Vivo"
  }
];

/*
 * Cores de comparação:
 * green = igual
 * yellow = próximo/parcial
 * red = diferente
 */
const TARGET = getDailyCharacter(CHARACTERS);

const input = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const suggestions = document.querySelector("#suggestions");
const results = document.querySelector("#results");
const toast = document.querySelector("#toast");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

function getDailyCharacter(characters) {
  const now = new Date();
  const year = now.getUTCFullYear();
  const start = Date.UTC(year, 0, 0);
  const today = Date.UTC(year, now.getUTCMonth(), now.getUTCDate());
  const dayOfYear = Math.floor((today - start) / 86400000);

  // Multiplicador fixo para deixar a escolha determinística no ano.
  const index = (dayOfYear * 37 + year) % characters.length;
  return characters[index];
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getDefaultImageDataUri() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="24" fill="#c4c4c4"/>
      <circle cx="60" cy="45" r="19" fill="#6f6f72"/>
      <path d="M28 96c5-18 17-28 32-28s27 10 32 28" fill="#6f6f72"/>
      <text x="60" y="110" text-anchor="middle" font-family="Arial" font-size="13" fill="#37373e">?</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const DEFAULT_IMAGE = getDefaultImageDataUri();

function createSuggestion(character) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "suggestion-item";
  button.setAttribute("role", "option");

  const image = document.createElement("img");
  image.className = "suggestion-image";
  image.src = character.image || DEFAULT_IMAGE;
  image.alt = "";

  const text = document.createElement("span");
  text.className = "suggestion-name";
  text.textContent = `${character.name} / ${character.team}`;

  button.append(image, text);

  button.addEventListener("click", () => {
    input.value = character.name;
    suggestions.classList.add("hidden");
    submitGuess(character);
  });

  return button;
}

function renderSuggestions(query) {
  const normalizedQuery = normalizeText(query);

  suggestions.innerHTML = "";

  if (!normalizedQuery) {
    suggestions.classList.add("hidden");
    return;
  }

  const matches = CHARACTERS
    .filter(character =>
      normalizeText(`${character.name} ${character.team}`).includes(normalizedQuery)
    )
    .slice(0, 5);

  if (!matches.length) {
    suggestions.classList.add("hidden");
    return;
  }

  matches.forEach(character => suggestions.appendChild(createSuggestion(character)));
  suggestions.classList.remove("hidden");
}

function getComparisonClass(value, targetValue, type) {
  if (value === targetValue) return "green";

  if (type === "age") {
    const difference = Math.abs(Number(value) - Number(targetValue));
    if (difference <= 5) return "yellow";
  }

  return "red";
}

function compareCharacter(character, target) {
  return {
    character: "red",
    system: getComparisonClass(character.system, target.system, "text"),
    gender: getComparisonClass(character.gender, target.gender, "text"),
    age: getComparisonClass(character.age, target.age, "age"),
    occupation: getComparisonClass(character.occupation, target.occupation, "text"),
    affiliation: getComparisonClass(character.affiliation, target.affiliation, "text"),
    status: getComparisonClass(character.status, target.status, "text")
  };
}

function createResultRow(character) {
  const comparison = compareCharacter(character, TARGET);

  const row = document.createElement("article");
  row.className = "result-row";
  row.setAttribute("aria-label", `Palpite: ${character.name}`);

  const cells = [
    { key: "character", text: `${character.name}` },
    { key: "system", text: character.system },
    { key: "gender", text: character.gender },
    { key: "age", text: character.age },
    { key: "occupation", text: character.occupation },
    { key: "affiliation", text: character.affiliation },
    { key: "status", text: character.status }
  ];

  cells.forEach(({ key, text }) => {
    const cell = document.createElement("div");
    cell.className = `result-cell ${comparison[key]}`;

    if (key === "character") {
      cell.classList.add("result-person");

      const image = document.createElement("img");
      image.src = character.image || DEFAULT_IMAGE;
      image.alt = "";

      const name = document.createElement("span");
      name.textContent = text;

      cell.append(image, name);
    } else {
      cell.textContent = String(text);
    }

    row.appendChild(cell);
  });

  return row;
}

function submitGuess(character) {
  if (!character) return;

  const alreadyGuessed = [...results.querySelectorAll(".result-row")]
    .some(row => row.getAttribute("aria-label") === `Palpite: ${character.name}`);

  if (alreadyGuessed) {
    showToast("Você já tentou esse personagem.");
    return;
  }

  results.prepend(createResultRow(character));
  input.value = "";
  suggestions.classList.add("hidden");

  const isCorrect = character.id === TARGET.id;
  showToast(isCorrect ? "Acertou o personagem do dia!" : "Palpite registrado.");

  if (isCorrect) {
    input.disabled = true;
    guessButton.disabled = true;
    guessButton.style.opacity = ".45";
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 1800);
}

input.addEventListener("input", event => {
  renderSuggestions(event.target.value);
});

input.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    suggestions.classList.add("hidden");
    return;
  }

  if (event.key === "Enter") {
    const first = suggestions.querySelector(".suggestion-item");
    if (first && !suggestions.classList.contains("hidden")) {
      first.click();
    }
  }
});

guessButton.addEventListener("click", () => {
  const query = normalizeText(input.value);

  const character = CHARACTERS.find(
    item => normalizeText(item.name) === query
  );

  if (!character) {
    showToast("Escolha um personagem da lista.");
    return;
  }

  submitGuess(character);
});

document.addEventListener("click", event => {
  if (!event.target.closest(".guess-area")) {
    suggestions.classList.add("hidden");
  }
});

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".mobile-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
