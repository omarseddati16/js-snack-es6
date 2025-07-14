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