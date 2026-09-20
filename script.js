const CHARACTERS = [
  {
    id: 1,
    name: "Kethryx Kinji",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 18,
    occupation: "Player",
    affiliation: ["4Team", "Claret Orders"],
    status: "Vivo"
  },
  {
    id: 2,
    name: "Olmar Coggrave",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 90,
    occupation: "Player",
    affiliation: "4Team",
    status: "Vivo"
  },
  {
    id: 3,
    name: "Mascarado",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "Player",
    affiliation: ["Penas de Morte", "Mascarados"],
    status: "Vivo"
  },
  {
    id: 4,
    name: "Sarali Khaszal",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 24,
    occupation: "Player",
    affiliation: ["Penas de Morte", "Claret Orders", "Rainha Corvo"],
    status: "Vivo"
  },
  {
    id: 5,
    name: "Jojo",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 25,
    occupation: "Player",
    affiliation: "Penas de Morte" ,
    status: "Vivo"
  },
  {
    id: 6,
    name: "Lucy",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 124,
    occupation: "Player",
    affiliation: "4Team" ,
    status: "Vivo"
  },
  {
    id: 7,
    name: "Ling Rabei",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 19,
    occupation: "Player",
    affiliation: ["4Team"] ,
    status: "Vivo"
  },
  {
    id: 8,
    name: "Luxiel",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 18,
    occupation: "Player",
    affiliation: ["4Team", "Luxon"] ,
    status: "Morto"
  },
  {
    id: 9,
    name: "Sayuri",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 19,
    occupation: "Player",
    affiliation: "Família Jagentooth" ,
    status: "Desconhecido"
  },
  {
    id: 10,
    name: "Dobrun Wraithraiser",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 70,
    occupation: "Player",
    affiliation: ["Penas de Morte", "Asharis do Vento", "Melora"] ,
    status: "Vivo"
  },
  {
    id: 11,
    name: "Thoth Henk",
    team: "Bonebreakers",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 22,
    occupation: "Player",
    affiliation: "Bonebreakers" ,
    status: "Desconhecido"
  },
  {
    id: 12,
    name: "Thomas Molisgard",
    team: "Bonebreakers",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 23,
    occupation: "Player",
    affiliation: "Bonebreakers" ,
    status: "Vivo"
  },
  {
    id: 13,
    name: "Medli Hawk'tuah",
    team: "Spin-off",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 3,
    occupation: "Player",
    affiliation: ["Spin-off", "Asharis do Vento"] ,
    status: "Vivo"
  },
  {
    id: 14,
    name: "Wruz Beltune",
    team: "Spin-off",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 18,
    occupation: "Player",
    affiliation: ["Spin-off", "Vax"] ,
    status: "Vivo"
  },
  {
    id: 15,
    name: "Pedro Palluchi",
    team: "A Ilha",
    image: null,
    system: "Assimilação",
    gender: "Masculino",
    age: 29,
    occupation: "Player",
    affiliation: "A Ilha" ,
    status: "Vivo"
  },
  {
    id: 16,
    name: "Elena Palluchi",
    team: "A Ilha",
    image: null,
    system: "Assimilação",
    gender: "Feminino",
    age: 12,
    occupation: "Player",
    affiliation: "A Ilha" ,
    status: "Vivo"
  },
  {
    id: 17,
    name: "Blaidd",
    team: "Claret Orders",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 33,
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Vivo"
  },
  {
    id: 18,
    name: "Kaito",
    team: "Solitário",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 22,
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Desconhecido"
  },
  {
    id: 19,
    name: "Bryce",
    team: "Império Dwendalian",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 26,
    occupation: "NPC",
    affiliation: "Império Dwendalian" ,
    status: "Desconhecido"
  },
  {
    id: 20,
    name: "Darrow",
    team: "Estocada Teimosa",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 32,
    occupation: "NPC",
    affiliation: "Estocada Teimosa" ,
    status: "Vivo"
  },
  {
    id: 21,
    name: "Ruggie",
    team: "Solitária",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 26,
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Vivo"
  },
  {
    id: 22,
    name: "Thed",
    team: "Myriad",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 35,
    occupation: "NPC",
    affiliation: "Myriad" ,
    status: "Vivo"
  },
  {
    id: 23,
    name: "Pumat Sol",
    team: "Assembleia Cerberus",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Lojista"] ,
    status: "Vivo"
  },
  {
    id: 24,
    name: "Trent Ikithon",
    team: "Assembleia Cerberus",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 78,
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 25,
    name: "Jack",
    team: "Chupada Suprema",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "26",
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Morto"
  },
  {
    id: 26,
    name: "Madeline",
    team: null,
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 18,
    occupation: "NPC",
    affiliation: ["Melora"] ,
    status: "Morto"
  },
  {
    id: 27,
    name: "Nikki",
    team: "Chupada Suprema",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 25,
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Vivo"
  },
  {
    id: 28,
    name: "Fenina",
    team: "Chupada Suprema",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 42,
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Morto"
  },
  {
    id: 29,
    name: "Ilstrin",
    team: "Lolth",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 23,
    occupation: "NPC",
    affiliation: "Lolth" ,
    status: "Vivo"
  },
  {
    id: 30,
    name: "Avantika",
    team: "Devora Tempestades",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "?",
    occupation: "NPC",
    affiliation: "Devora Tempestades" ,
    status: "Morto"
  },
  {
    id: 31,
    name: "Clarice",
    team: "Claret Orders",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 21,
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Desconhecido"
  },
  {
    id: 32,
    name: "Leylas Kryn",
    team: "Dinastia Kryn",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "+1200",
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Vivo"
  },
  {
    id: 33,
    name: "Gauskiira Beltune",
    team: "Dinastia Kryn",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 127,
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Desconhecido"
  },
  {
    id: 34,
    name: "Quana Kryn",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 25,
    occupation: "NPC",
    affiliation: ["Guarda", "Dinastia Kryn"] ,
    status: "Vivo"
  },
  {
    id: 35,
    name: "Essek Thelyss",
    team: "Dinastia Kryn",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: 127,
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Vivo"
  },
  {
    id: 36,
    name: "Jourrael",
    team: "Lolth",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "?",
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Vivo"
  },
  {
    id: 37,
    name: "Laris",
    team: "4Team",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: 20,
    occupation: "NPC",
    affiliation: "4Team" ,
    status: "Vivo"
  },
  {
    id: 38,
    name: "Ludinus Da'Leth",
    team: "Assembleia Cerberus",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 39,
    name: "Vess DeRogna",
    team: "Assembleia Cerberus",
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 40,
    name: "Lia",
    team: null,
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Lojista", "Bysaes Till"] ,
    status: "Vivo"
  },
  {
    id: 41,
    name: "Fenian Olawenys",
    team: null,
    image: null,
    system: "D&D",
    gender: "MAsculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Bysaes Till"] ,
    status: "Vivo"
  },
  {
    id: 42,
    name: "Edyrm",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: "Bysaes Till" ,
    status: "Vivo"
  },
  {
    id: 43,
    name: "Pedro",
    team: "Claret Orders",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Vivo"
  },
  {
    id: 44,
    name: "Kelfyr",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Bysaes Till", "Guarda"] ,
    status: "Vivo"
  },
  {
    id: 45,
    name: "Amara",
    team: null,
    image: null,
    system: "D&D",
    gender: "Feminino",
    age: "?",
    occupation: "NPC",
    affiliation: "Bysaes Till" ,
    status: "Vivo"
  },
  {
    id: 46,
    name: "Enrico Seraphim",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: "Desconhecido" ,
    status: "Vivo"
  },
  {
    id: 47,
    name: "Rafael Chanles",
    team: null,
    image: null,
    system: "Call of Cthulhu",
    gender: "Masculino",
    age: 19,
    occupation: "Player",
    affiliation: "Desconhecido" ,
    status: "Morto"
  },
  {
    id: 48,
    name: "Fred",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "Player",
    affiliation: "Desconhecido" ,
    status: "Morto"
  },
  {
    id: 49,
    name: "Leucis",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "24",
    occupation: "NPC",
    affiliation: "Desconhecido" ,
    status: "Vivo"
  },
  {
    id: 50,
    name: "Ildan",
    team: "Penas de Morte",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Penas de Morte"] ,
    status: "Vivo"
  },
  {
    id: 51,
    name: "Zilong",
    team: "Alma de Cobalto",
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: ["Alma de Cobalto", "Penas de Morte"] ,
    status: "Vivo"
  },
  {
    id: 52,
    name: "Ziellos",
    team: null,
    image: null,
    system: "D&D",
    gender: "Masculino",
    age: "?",
    occupation: "NPC",
    affiliation: "Desconhecido" ,
    status: "Desconhecido"
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
