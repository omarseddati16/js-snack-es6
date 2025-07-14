// Snack 1

const bicycle = [
  {
    nome: "rossa",
    peso: "7,2",
  },
  {
    nome: "blu",
    peso: "7,0",
  },
  {
    nome: "verde",
    peso: "7,1",
  },
  {
    nome: "bianca",
    peso: "6,9",
  },
  {
    nome: "nera",
    peso: "7,5",
  },
]

let lightweightBicycles = bicycle[0]

for (let i = 1; i < bicycle.length; i++) {
  const currentbicycle = bicycle[i]
  if (currentbicycle.peso < lightweightBicycles.peso)
    lightweightBicycles = currentbicycle
}

console.log(lightweightBicycles)

// Snack 2

const footballTeam = [
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  }
];

footballTeam.forEach(function (team) {
  team.puntiFatti = Math.floor(Math.random() * 100) + 1;
  team.falliSubiti = Math.floor(Math.random() * 300) + 1;
});

const nomiFalli = []

for (let i = 1; i < footballTeam.length; i++) {
  nomiFalli.push({
    nome: footballTeam[i].nome,
    puntiFatti: footballTeam[i].falliSubiti,
  });

}

console.log(nomiFalli)