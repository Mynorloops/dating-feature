const animals = [
  {
    name: "Hansie",
    species: "dog",
    cost: 45
  },
  {
    name: "Joopie",
    species: "dog",
    cost: 22
  },
  {
    name: "Beppy",
    species: "fish",
    cost: 10
  },
  {
    name: "Sem",
    species: "fish",
    cost: 10
  },
  {
    name: "Lolita",
    species: "dog",
    cost: 60
  },
  {
    name: "Fluffybeans",
    species: "pig",
    cost: 20
  },
  {
    name: "BearFluf",
    species: "pig",
    cost: 15
  },
  {
    name: "Manke Neel",
    species: "dog",
    cost: 1
  }
];

var dogs = animals.filter(function(doggos) {
  return doggos.species == "dog";
});

console.log(dogs);

//map: return an array which only contains the species of the animal
//filter: return an array which only contains dogs
//reduce: return an array which contains the total amount of each species in the list, a tally so to say; turtle: 2, dog: 4, cat: 2 etc..
