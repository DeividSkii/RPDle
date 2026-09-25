/*
 * Cores de comparação:
 * green = igual
 * yellow = próximo/parcial
 * red = diferente
 */
import {CHARACTERS} from "./characters.js";
const TARGET = getDailyCharacter(CHARACTERS);

const input = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const suggestions = document.querySelector("#suggestions");
const results = document.querySelector("#results");
const toast = document.querySelector("#toast");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const victoryScreen = document.querySelector("#victoryScreen");
const victoryImage = document.querySelector("#victoryImage");
const victoryName = document.querySelector("#victoryName");
const victoryTeam = document.querySelector("#victoryTeam");
const defeatScreen = document.getElementById("defeatScreen");
const defeatImage = document.getElementById("defeatImage");
const defeatName = document.getElementById("defeatName");
const defeatTeam = document.getElementById("defeatTeam");



const closeVictory = document.querySelector("#closeVictory");
const closeVictoryButton = document.querySelector("#closeVictoryButton");
const closeDefeat = document.getElementById("closeDefeat");
const closeDefeatButton = document.getElementById("closeDefeatButton");
const lives = document.querySelector("#lives");
const attemptsText = document.querySelector("#attemptsText")

const MAX_ATTEMPTS = 6;

function updateAttempts(){
    const game = getTodayGame();

    const used = game.guesses.length
    const remaining = MAX_ATTEMPTS - used;

    lives.innerHTML = "";

    for(let i = 0; i < MAX_ATTEMPTS; i++){

        const heart = document.createElement("span");

        heart.textContent = i < remaining ? "❤️" :  "🖤";
        lives.appendChild(heart)
    } 
}

function getDailyCharacter(characters) {
  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 0)
  const today = new Date(
    year,
    now.getMonth(),
    now.getDate()
  )
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
  if(character.team != null){
    text.textContent = `${character.name} / ${character.team}`;
  } else {
    text.textContent = `${character.name}`
  }

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

function compareText(guess, target) {
    if (guess === target) {
        return "green";
    }

    return "red";
}

function compareAge(guess, target) {

    // Se alguma idade for desconhecida,
    // não dá para determinar se é maior ou menor.
    if (
        guess.ageType === "unknown" &&
        target.ageType === "unknown"
    ) {
        return {
            className: "green",
            arrow: ""
        };
    }

    // O personagem diário possui uma idade exata
    if (target.ageType === "exact") {

        // Se o palpite também é exato
        if (guess.ageType === "exact") {

            if (guess.age === target.age) {
                return {
                    className: "green",
                    arrow: ""
                };
            }

            if (guess.age > target.age) {
                return {
                    className: "red",
                    arrow: "↓"
                };
            }

            return {
                className: "red",
                arrow: "↑"
            };
        }

        // Palpite possui apenas um limite mínimo
        if (guess.ageType === "atLeast") {

            if (guess.age > target.age) {
                return {
                    className: "red",
                    arrow: "↓"
                };
            }

            return {
                className: "red",
                arrow: "↑"
            };
        }
    }

    // O personagem diário possui idade mínima (ex: 1200+)
    if (target.ageType === "atLeast") {

        if (guess.ageType === "exact") {

            // Palpite abaixo dos 1200 anos
            if (guess.age < target.age) {
                return {
                    className: "red",
                    arrow: "↓"
                };
            }

            // 1200 ou mais satisfaz a informação conhecida
            return {
                className: "green",
                arrow: ""
            };
        }

        // Dois limites mínimos
        if (guess.ageType === "atLeast") {
            return {
                className: "green",
                arrow: ""
            };
        }
    }

    return {
        className: "red",
        arrow: ""
    };
}

function compareAffiliation(guessAffiliation, targetAffiliation){
  const guess = Array.isArray(guessAffiliation)
    ? guessAffiliation
    : [guessAffiliation];

  const target = Array.isArray(targetAffiliation) ? targetAffiliation : [targetAffiliation]

  const matches = guess.filter(affiliation => target.includes(affiliation))

  //Se todas estao corretas
  if (matches.length == guess.length &&
    guess.length == target.length
  ) {
    return "green";
  }

  if (matches.length > 0){
    return "yellow";
  }

  return "red";
  
}

function compareCharacter(character, target) {
    return {
        character: character.id === target.id ? "green" : "red",

        Raça: compareText(
            character.Raça,
            target.Raça
        ),

        gender: compareText(
            character.gender,
            target.gender
        ),

        age: compareAge(
            character,
            target
        ),

        occupation: compareText(
            character.occupation,
            target.occupation
        ),

        affiliation: compareAffiliation(
            character.affiliation,
            target.affiliation
        ),

        status: compareText(
            character.status,
            target.status
        )
    };
}

function createResultRow(character) {
  const comparison = compareCharacter(character, TARGET);

  const row = document.createElement("article");
  row.className = "result-row";
  row.setAttribute("aria-label", `Palpite: ${character.name}`);

  const cells = [
    { key: "character", text: `${character.name}` },
    { key: "Raça", text: character.Raça },
    { key: "gender", text: character.gender },
    { key: "age", text: character.age },
    { key: "occupation", text: character.occupation },
    { key: "affiliation", text: character.affiliation },
    { key: "status", text: character.status }
  ];

 cells.forEach(({ key, text }) => {
    const cell = document.createElement("div");

    if (key === "age") {
        cell.className = `result-cell ${comparison.age.className}`;

        const ageText = document.createElement("span");
        ageText.textContent = String(text);

        const arrow = document.createElement("span");
        arrow.textContent = comparison.age.arrow;

        cell.append(ageText, arrow);
    } else {
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
    }

    row.appendChild(cell);
});

  return row;
}

function submitGuess(character) {

    if (!character) return;

    const game = getTodayGame();

    if(game.guesses.length >= MAX_ATTEMPTS){
        showToast("Você não tem mais tentativas.");
        return;
    }

    const alreadyGuessed = [
        ...results.querySelectorAll(".result-row")
    ].some(
        row =>
            row.getAttribute("aria-label") ===
            `Palpite: ${character.name}`
    );

    if (alreadyGuessed) {
        showToast("Você já tentou esse personagem.");
        return;
    }

    // Cria a row
    results.prepend(
        createResultRow(character)
    );

    // Salva o palpite
    saveGuess(character);

    //Atualiza o contador de vidas
    updateAttempts();

    // Limpa o campo
    input.value = "";
    suggestions.classList.add("hidden");

    // Verifica se acertou
    const isCorrect =
        character.id === TARGET.id;

    if (isCorrect) {

        saveVictory(character);

        showVictoryScreen(character);

        input.disabled = true;
        guessButton.disabled = true;
        guessButton.style.opacity = ".45";

        return;
    }

    const updatedGame = getTodayGame();

    if(updatedGame.guesses.length >= MAX_ATTEMPTS){
        showToast("Você perdeu! Suas 6 tentavias acabaram.")

        showDefeatScreen(TARGET);
        
        input.disabled = true;
        guessButton.disabled = true;
        guessButton.style.opacity = ".45";

        return;
    }

    showToast("Palpite registrado.");
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

function showVictoryScreen(character) {

    victoryImage.src = character.image || DEFAULT_IMAGE;

    victoryName.textContent = character.name;

    victoryTeam.textContent = character.team
        ? character.team
        : "Sem grupo";

    victoryScreen.classList.remove("hidden");
}
function showDefeatScreen(character) {

    defeatImage.src = character.image || DEFAULT_IMAGE;

    defeatName.textContent = character.name;

    defeatTeam.textContent = character.team
        ? character.team
        : "Sem grupo";

    defeatScreen.classList.remove("hidden");
}

function hideVictoryScreen() {
    victoryScreen.classList.add("hidden");
}

closeVictory.addEventListener("click", hideVictoryScreen);
closeVictoryButton.addEventListener("click", hideVictoryScreen);

function hideDefeatScreen() {
    defeatScreen.classList.add("hidden");
}

closeDefeat.addEventListener("click", hideDefeatScreen);
closeDefeatButton.addEventListener("click", hideDefeatScreen);

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

function getTodayKey() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function getTodayGame() {
    const todayKey = getTodayKey();

    const saved = localStorage.getItem(`rpgDle_2_${todayKey}`);

    if (!saved) {
        return {
            won: false,
            characterId: null,
            characterName: null,
            guesses: []
        };
    }

    try {
        const game = JSON.parse(saved);

        return {
            won: game.won === true,
            characterId: game.characterId ?? null,
            characterName: game.characterName ?? null,
            guesses: Array.isArray(game.guesses)
                ? game.guesses
                : []
        };

    } catch (error) {
        console.error("Erro ao ler o jogo salvo:", error);

        return {
            won: false,
            characterId: null,
            characterName: null,
            guesses: []
        };
    }
}


function saveGame(game) {
    const todayKey = getTodayKey();

    localStorage.setItem(
        `rpgDle_2_${todayKey}`,
        JSON.stringify(game)
    );
}


function saveGuess(character) {
    const game = getTodayGame();

    if (game.guesses.includes(character.id)) {
        return;
    }

    game.guesses.push(character.id);

    saveGame(game);

    console.log("Palpite salvo:", game);
}


function saveVictory(character) {
    const game = getTodayGame();

    game.won = true;
    game.characterId = character.id;
    game.characterName = character.name;

    saveGame(game);

    console.log("Vitória salva:", game);
}

function saveDefeat(character) {
    const game = getTodayGame();

    game.won = false;
    game.lost = true;
    game.characterId = character.id;
    game.characterName = character.name;

    saveGame(game);

    console.log("Derrota salva:", game);
}


function restoreTodayGame() {
    const game = getTodayGame();

    console.log("Jogo recuperado:", game);

    // Recria todos os palpites
    game.guesses.forEach(characterId => {

        const character = CHARACTERS.find(
            character => character.id === characterId
        );

        if (!character) {
            return;
        }

        results.prepend(
            createResultRow(character)
        );
    });

    // Se já ganhou, restaura a vitória
    if (game.won) {

    const character = CHARACTERS.find(
        character => character.id === game.characterId
    );

    if (character) {
        showVictoryScreen(character);
    }

    } else if (game.guesses.length >= MAX_ATTEMPTS) {

        showDefeatScreen(TARGET);
    }

    if (game.won || game.guesses.length >= MAX_ATTEMPTS) {
        input.disabled = true;
        guessButton.disabled = true;
        guessButton.style.opacity = ".45";
    }

    updateAttempts();
}

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

restoreTodayGame();