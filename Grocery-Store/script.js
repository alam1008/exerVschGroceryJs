var shopper = {
  firstName: "Jack",
  lastName: "Johnson",
  age: 24,
  eyeColor: "brown",
  hairColor: "blonde",
  onFamilyPlan: true,
  family: ["Jason", "Jackie", "Julie"],
  fullName: function() {
    return thisfirstName + "" + thislastName;
  },
  groceryCart:["milk", "cheese", "yogurt","bread", "cereal", "pasta","turkey", "prosciutto", "ribeye","olive oil", "butter"]
}


console.log(shopper)
console.log(shopper.groceryCart)