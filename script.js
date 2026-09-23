const CHARACTERS = [
  {
    id: 1,
    name: "Kethryx Kinji",
    team: "4Team",
    image: "./assets/kethryx.png",
    system: "D&D",
    gender: "Masculino",
    age: 18,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["4Team", "Claret Orders"],
    status: "Vivo"
  },
  {
    id: 2,
    name: "Olmar Coggrave",
    team: "4Team",
    image: "./assets/Olmar.png",
    system: "D&D",
    gender: "Masculino",
    age: 90,
    ageType: "exact",
    occupation: "Player",
    affiliation: "4Team",
    status: "Vivo"
  },
  {
    id: 3,
    name: "Mascarado",
    team: "Penas de Morte",
    image: "./assets/mascarado.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "Player",
    affiliation: ["Penas de Morte", "Mascarados"],
    status: "Vivo"
  },
  {
    id: 4,
    name: "Sarali Khaszal",
    team: "Penas de Morte",
    image: "./assets/Sarali.png",
    system: "D&D",
    gender: "Feminino",
    age: 24,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["Penas de Morte", "Claret Orders", "Rainha Corvo"],
    status: "Vivo"
  },
  {
    id: 5,
    name: "Jojo",
    team: "Penas de Morte",
    image: "./assets/jojo.png",
    system: "D&D",
    gender: "Masculino",
    age: 25,
    ageType: "exact",
    occupation: "Player",
    affiliation: "Penas de Morte" ,
    status: "Vivo"
  },
  {
    id: 6,
    name: "Lucy",
    team: "4Team",
    image: "./assets/lucy.png",
    system: "D&D",
    gender: "Feminino",
    age: 124,
    ageType: "exact",
    occupation: "Player",
    affiliation: "4Team" ,
    status: "Vivo"
  },
  {
    id: 7,
    name: "Ling Rabei",
    team: "4Team",
    image: "./assets/ling.png",
    system: "D&D",
    gender: "Masculino",
    age: 19,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["4Team"] ,
    status: "Vivo"
  },
  {
    id: 8,
    name: "Luxiel",
    team: "4Team",
    image: "./assets/luxiel.png",
    system: "D&D",
    gender: "Masculino",
    age: 18,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["4Team", "Luxon"] ,
    status: "Morto"
  },
  {
    id: 9,
    name: "Sayuri",
    team: "4Team",
    image: "./assets/sayuri.png",
    system: "D&D",
    gender: "Feminino",
    age: 19,
    ageType: "exact",
    occupation: "Player",
    affiliation: "Família Jagentooth" ,
    status: "Desconhecido"
  },
  {
    id: 10,
    name: "Dobrun Wraithraiser",
    team: "Penas de Morte",
    image: "./assets/dobrun.png",
    system: "D&D",
    gender: "Masculino",
    age: 70,
    ageType: "exact",
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
    ageType: "exact",
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
    ageType: "exact",
    occupation: "Player",
    affiliation: "Bonebreakers" ,
    status: "Vivo"
  },
  {
    id: 13,
    name: "Medli Hawk'tuah",
    team: "Spin-off",
    image: "./assets/medli.png",
    system: "D&D",
    gender: "Feminino",
    age: 3,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["Spin-off", "Asharis do Vento"] ,
    status: "Vivo"
  },
  {
    id: 14,
    name: "Wruz Beltune",
    team: "Liceu de Alabastro",
    image: "./assets/wruz.png",
    system: "D&D",
    gender: "Masculino",
    age: 18,
    ageType: "exact",
    occupation: "Player",
    affiliation: ["Liceu de Alabastro"] ,
    status: "Vivo"
  },
  {
    id: 15,
    name: "Pedro Palluchi",
    team: "A Ilha",
    image: null ,
    system: "Assimilação",
    gender: "Masculino",
    age: 29,
    ageType: "exact",
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
    ageType: "exact",
    occupation: "Player",
    affiliation: "A Ilha" ,
    status: "Vivo"
  },
  {
    id: 17,
    name: "Blaidd",
    team: "Claret Orders",
    image: "./assets/blaidd.png",
    system: "D&D",
    gender: "Masculino",
    age: 33,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Vivo"
  },
  {
    id: 18,
    name: "Kaito",
    team: "Solitário",
    image: "./assets/Kaito.png",
    system: "D&D",
    gender: "Masculino",
    age: 22,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Desconhecido"
  },
  {
    id: 19,
    name: "Bryce",
    team: "Império Dwendalian",
    image: "./assets/Bryce_Feelid.png",
    system: "D&D",
    gender: "Masculino",
    age: 26,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Império Dwendalian" ,
    status: "Desconhecido"
  },
  {
    id: 20,
    name: "Darrow",
    team: "Estocada Teimosa",
    image: "./assets/darrow.png",
    system: "D&D",
    gender: "Masculino",
    age: 32,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Estocada Teimosa" ,
    status: "Vivo"
  },
  {
    id: 21,
    name: "Ruggie",
    team: "Solitária",
    image: "./assets/ruggie.png",
    system: "D&D",
    gender: "Feminino",
    age: 26,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Vivo"
  },
  {
    id: 22,
    name: "Thed",
    team: "Myriad",
    image: "./assets/thed.png",
    system: "D&D",
    gender: "Masculino",
    age: 35,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Myriad" ,
    status: "Vivo"
  },
  {
    id: 23,
    name: "Pumat Sol",
    team: "Assembleia Cerberus",
    image: "./assets/pumat_sol.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Lojista"] ,
    status: "Vivo"
  },
  {
    id: 24,
    name: "Trent Ikithon",
    team: "Assembleia Cerberus",
    image: "./assets/trent.png",
    system: "D&D",
    gender: "Masculino",
    age: 78,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 25,
    name: "Jack",
    team: "Chupada Suprema",
    image: "./assets/Jack.png",
    system: "D&D",
    gender: "Masculino",
    age: "26",
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Morto"
  },
  {
    id: 26,
    name: "Madeline",
    team: null,
    image: "./assets/Madeline.png",
    system: "D&D",
    gender: "Feminino",
    age: 18,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Melora"] ,
    status: "Morto"
  },
  {
    id: 27,
    name: "Nikki",
    team: "Chupada Suprema",
    image: "./assets/Nikki.png",
    system: "D&D",
    gender: "Feminino",
    age: 25,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Vivo"
  },
  {
    id: 28,
    name: "Fenina",
    team: "Chupada Suprema",
    image: "./assets/Fenina.png",
    system: "D&D",
    gender: "Feminino",
    age: 42,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Chupada Suprema", "4Team"] ,
    status: "Morto"
  },
  {
    id: 29,
    name: "Ilstrin",
    team: "Lolth",
    image: "./assets/ilstrin.png",
    system: "D&D",
    gender: "Masculino",
    age: 23,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Lolth" ,
    status: "Vivo"
  },
  {
    id: 30,
    name: "Avantika",
    team: "Devora Tempestades",
    image: "./assets/avantika.png",
    system: "D&D",
    gender: "Feminino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: "Devora Tempestades" ,
    status: "Morto"
  },
  {
    id: 31,
    name: "Clarice",
    team: "Claret Orders",
    image: "./assets/clarice.png",
    system: "D&D",
    gender: "Feminino",
    age: 21,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Desconhecido"
  },
  {
    id: 32,
    name: "Leylas Kryn",
    team: "Dinastia Kryn",
    image: "./assets/Leylas_Kryn.png",
    system: "D&D",
    gender: "Feminino",
    age: 1200,
    ageType: "atLeast",
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Vivo"
  },
  {
    id: 33,
    name: "Gauskiira Beltune",
    team: "Dinastia Kryn",
    image: "./assets/gauskiira.png",
    system: "D&D",
    gender: "Masculino",
    age: 127,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Desconhecido"
  },
  {
    id: 34,
    name: "Quana Kryn",
    team: "Penas de Morte",
    image: "./assets/quana_kryn.png",
    system: "D&D",
    gender: "Feminino",
    age: 25,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Guarda", "Dinastia Kryn"] ,
    status: "Vivo"
  },
  {
    id: 35,
    name: "Essek Thelyss",
    team: "Dinastia Kryn",
    image: "./assets/essek.png",
    system: "D&D",
    gender: "Masculino",
    age: 127,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "Dinastia Kryn" ,
    status: "Vivo"
  },
  {
    id: 36,
    name: "Jourrael",
    team: "Lolth",
    image: "./assets/jourrael.png",
    system: "D&D",
    gender: "Feminino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: "Solitário" ,
    status: "Vivo"
  },
  {
    id: 37,
    name: "Laris",
    team: "4Team",
    image: "./assets/laris.png",
    system: "D&D",
    gender: "Feminino",
    age: 20,
    ageType: "exact",
    occupation: "NPC",
    affiliation: "4Team" ,
    status: "Vivo"
  },
  {
    id: 38,
    name: "Ludinus Da'Leth",
    team: "Assembleia Cerberus",
    image: "./assets/ludinus.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 39,
    name: "Vess DeRogna",
    team: "Assembleia Cerberus",
    image: "./assets/vess_Derogna.png",
    system: "D&D",
    gender: "Feminino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Assembleia Cerberus", "Império Dwendalian"] ,
    status: "Vivo"
  },
  {
    id: 40,
    name: "Lia",
    team: null,
    image: "./assets/lia.png",
    system: "D&D",
    gender: "Feminino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Lojista", "Bysaes Till"] ,
    status: "Vivo"
  },
  {
    id: 41,
    name: "Fenian Olawenys",
    team: null,
    image: "./assets/fenian_olawenys.png",
    system: "D&D",
    gender: "MAsculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Bysaes Till"] ,
    status: "Vivo"
  },
  {
    id: 42,
    name: "Edyrm",
    team: null,
    image: "./assets/edyrm.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: "Bysaes Till" ,
    status: "Vivo"
  },
  {
    id: 43,
    name: "Pedro",
    team: "Claret Orders",
    image: "./assets/pedro.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: "Claret Orders" ,
    status: "Vivo"
  },
  {
    id: 44,
    name: "Kelfyr",
    team: null,
    image: "./assets/kelfyr_amara.png",
    system: "D&D",
    gender: "Masculino",
    age: "?",
    ageType: "unknown",
    occupation: "NPC",
    affiliation: ["Bysaes Till", "Guarda"] ,
    status: "Vivo"
  },
  {
    id: 45,
    name: "Amara",
    team: null,
    image: "./assets/kelfyr_amara.png",
    system: "D&D",
    gender: "Feminino",
    age: "?",
    ageType: "unknown",
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
    ageType: "unknown",
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
    ageType: "exact",
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
    ageType: "unknown",
    occupation: "Player",
    affiliation: "Desconhecido" ,
    status: "Morto"
  },
  {
    id: 49,
    name: "Zilong",
    team: "Alma de Cobalto",
    image: "./assets/zilong.png",
    system: "D&D",
    gender: "Masculino",
    age: 24,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Alma de Cobalto", "Penas de Morte"] ,
    status: "Vivo"
  },
  {
    id: 50,
    name: "Ziellos",
    image: null , 
    team: "Culto de Orcus",
    image: "./assets/ziellos.png",
    system: "D&D",
    gender: "Masculino",
    age: 38,
    ageType: "exact",
    occupation: "NPC",
    affiliation: ["Culto de Orcus", "Orcus"] ,
    status: "Morto-Vivo"
  },
  {
    id: 51,
    name: 'Ildan Greyroot',
    image: "./assets/ildan.png",
    team: null ,
    system: 'D&D',
    gender: 'Masculino' , 
    age: 22 ,
    agetype: 'exact' ,
    occupation: 'NPC' ,
    affiliation: ['Penas de Morte', 'O Sussurrado'] ,
    status: 'Vivo' , 
  },
  {
    id: 52,
    name: 'Erastus Greyroot',
    image: null,
    team: 'Os Remanescentes',
    system: 'D&D',
    gender: 'Masculino',
    age: 49,
    ageType: 'exact',
    occupation: 'NPC',
    affiliation: ['Os remanescentes', 'O Sussurrado'],
    status: 'Morto?',
  },
  {
    id: 53,
    name: 'Gshar Du',
    image: './assets/gashur.png',
    team: null,
    system: 'D&D',
    gender: 'Masculino',
    age: 60,
    ageType: 'exact',
    occupation: 'NPC', 
    affiliation: 'O Cego',
    status: 'Morto',
  },
  {
    id: 54,
    name: 'Leucis',
    image:  './assets/leucis.png',
    team:  'Sorriso Áureo',
    system: 'D&D',
    gender: 'Masculino',
    age: 24,
    ageType: 'exact', 
    occupation: 'NPC', 
    affiliation: ['Sorriso Áureo', 'Penas de Morte'],
    status: 'Vivo' ,
  },
  {
    id: 55,
    name: 'Sarah',
    image: './assets/sarah.png', 
    team:  'Liga dos Milagres',
    system: 'D&D',
    gender: 'Feminino',
    age: 24,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Liga dos Milagres',
    status: 'Vivo',
  },
  {
    id: 56,
    name: 'Nasima Guillian',
    image:  './assets/Nasima.png',
    team:  'Ashari',
    system: 'D&D',
    gender: 'Masculino',
    age: 17,
    ageType: 'exact', 
    occupation: 'Player',
    affiliation: ['Ashari', 'Penas de Morte', 'Alabastro'],
    status: 'Morto'
  },
  {
    id: 57,
    name: 'Eduardo Eldwyn',
    image:  null,
    team: 'Liceu de Alabastro', 
    system: 'D&D',
    gender: 'Masculino',
    age: 18,
    ageType: 'exact',
    occupation: 'Player',
    affiliation: 'Liceu de Alabastro',
    status: 'Vivo'
  },
  {
    id: 58,
    name: 'Alfredo Eldwyn',
    image:  null,
    team:  'Liceu de Alabastro',
    system: 'D&D',
    gender: 'Masculino',
    age: 17,
    ageType: 'exact' ,
    occupation: 'Player',
    affiliation: 'Liceu de Alabastra', 
    status: 'Vivo',
  },
  {
    id: 59,
    name: 'Alasterre de  Vitrevos',
    image:  './assets/alasterreDeVitrevos.png',
    team: 'Claret Orders', 
    system: 'D&D',
    gender: 'Masculino',
    age: 30,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Claret Orders',
    status: 'Vivo',
  },
  {
    id: 60,
    name: 'Jorick LaMesh',
    image: './assets/JorickLamesh.png',
    team:  'Claret Orders',
    system: 'D&D',
    gender: 'Masculino',
    age: 33,
    ageType: 'exact',
    occupation: 'NPC',
    affiliation: 'Claret Orders',
    status: 'Vivo',
  },
  {
    id: 61,
    name: 'Teresa Dulamar',
    image: './assets/TeresaDulamar.png',
    team:  'Claret Orders',
    system: 'D&D',
    gender: 'Feminino',
    age: 80,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Claret Order',
    status: 'Vivo',
  },
  {
    id: 62,
    name: 'Vogal', 
    image:  './assets/Vogal.png',
    team:  'Claret Orders',
    system: 'D&D',
    gender: 'Neutro',
    age: 16,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Claret Orders',
    status: 'Vivo',
  },
  {
    id: 63,
    name: 'Verruga',
    image: './assets/Verruga.png', 
    team: 'Demônios', 
    system: 'D&D',
    gender: 'Masculino',
    age: 1500,
    ageType: 'atleast',
    occupation: 'NPC',
    affiliation: ['Ildan','Orcus'],
    status: 'Vivo',
  },
  {
    id: 64,
    name: 'Erband Borrowspine',
    image: './assets/ErbandBorrowspine.png', 
    team:  'Família Borrowspine',
    system: 'D&D',
    gender: 'Masculino',
    age: 87,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Família Borrowspine',
    status: 'Morto',
  },
  {
    id: 65,
    name: 'Rei Thangrul ||',
    image: './assets/ReiThangrul.png',
    team:  null,
    system: 'D&D',
    gender: 'Masculino',
    age: 79,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'Torog',
    status: 'Morto',
  },
  {
    id: 66,
    name: 'Mythriel',
    image:  './assets/Mythriel.png',
    team: 'Desacorrentados', 
    system: 'D&D',
    gender: 'Feminino',
    age: 32,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: ['Dessacorrentados','Família Monárquica de Emberhold'],
    status: 'Vivo',
  },
  {
    id: 67,
    name: 'Hella Khaszal',
    image: './assets/HellaKhaszal.png',
    team: null,
    system: 'D&D',
    gender: 'Feminino',
    age: 41,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: ['Aizen','Dimitri','Belial','Fierna','Sythaeryn'],
    status: 'Vivo',
  },
  {
    id: 68, 
    name: 'Dimitri Khaszal',
    image: './assets/DimitriKhaszal.png', 
    team:  null,
    system: 'D&D',
    gender: 'Masculino',
    age: 8,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: ['Hella','Aizen','Synthaerin'],
    status: 'Vivo',
  },
  {
    id: 69,
    name: 'Sythaeryn Dricat',
    image: './assets/SythaerynDricat.png', 
    team: null,
    system: 'D&D',
    gender: 'Masculino',
    age: 42,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: ['Hella','Aizen','Dimitri'],
    status: 'Morto',
  },
  {
    id: 70,
    name: 'Aragorn',
    image:  './assets/Aragorn.png',
    team:  'Claret Orders',
    system: 'D&D',
    gender: 'Masculino',
    age: 25,
    ageType: 'exact',
    occupation: 'NPC',
    affiliation: ['Claret Orders','Penas de Mortes'],
    status: 'Morto',
  },
  {
    id: 71, 
    name: 'Rhaegar',
    image: './assets/Rhaegar.png',
    team:  'BoneBreakers',
    system: 'D&D',
    gender: 'Masculino',
    age: 23,
    ageType: 'exact',
    occupation: 'Player',
    affiliation: ['BB','Harpistas','Corte Seelie','Chapéus de Palha'],
    status: 'Vivo',
  },
  {
    id: 72,
    name: 'Zariel Merigold',
    image:  './assets/ZarielMerigold.png',
    team: 'BloodHunters',
    system: 'D&D',
    gender: 'Masculino',
    age: 22,
    ageType: 'exact', 
    occupation: 'Player',
    affiliation: 'BloodHunters',
    status: 'Vivo'
  },
  {
    id: 73,
    name: 'Triss Merigold',
    image:  './assets/TrissMerigold.png',
    team:  'BloodHunters',
    system: 'D&D',
    gender: 'Feminino',
    age: 23,
    ageType: 'exact', 
    occupation: 'NPC',
    affiliation: 'BloodHunters',
    status: 'Vivo',
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
const victoryScreen = document.querySelector("#victoryScreen");
const victoryImage = document.querySelector("#victoryImage");
const victoryName = document.querySelector("#victoryName");
const victoryTeam = document.querySelector("#victoryTeam");

const closeVictory = document.querySelector("#closeVictory");
const closeVictoryButton = document.querySelector("#closeVictoryButton");

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
        guess.ageType === "unknown" ||
        target.ageType === "unknown"
    ) {
        return {
            className: "red",
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

        system: compareText(
            character.system,
            target.system
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
    { key: "system", text: character.system },
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

    const alreadyGuessed = [...results.querySelectorAll(".result-row")]
        .some(
            row =>
                row.getAttribute("aria-label") ===
                `Palpite: ${character.name}`
        );

    if (alreadyGuessed) {
        showToast("Você já tentou esse personagem.");
        return;
    }

    results.prepend(
        createResultRow(character)
    );

    input.value = "";
    suggestions.classList.add("hidden");

    const isCorrect =
        character.id === TARGET.id;

    if (isCorrect) {

        showVictoryScreen(character);

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

function hideVictoryScreen() {
    victoryScreen.classList.add("hidden");
}

closeVictory.addEventListener("click", hideVictoryScreen);
closeVictoryButton.addEventListener("click", hideVictoryScreen);

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
