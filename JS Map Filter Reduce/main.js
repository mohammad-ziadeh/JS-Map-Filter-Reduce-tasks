{
  const names = [" injustice  ", "   Superman", "Batman    ", "Flash  "];
  function cleanName() {
    const newName = names.map((name) => name.trim());
    console.log(newName);
  }
  cleanName(names);
}
//###############################two######################################
console.log("2-");
{
  const nums = [10, 20, 30, 40];
  function toKM(value) {
    let KM = value.map((num) => (num * 1.609).toFixed(3));
    console.log(KM);
  }
  toKM(nums);
}

//###############################three######################################
console.log("3-");
{
  const nums = [1, 2, 3, 4, 5];
  function MathAll(value) {
    let power = value.map((num) => num ** 2);
    let sum = power.reduce((sum, num) => sum + num);
    let ave = sum / value.length;
    console.log(ave);
  }
  MathAll(nums);
}

//###############################four######################################
console.log("4-");
{
  const nums = [1, 2, 3, 4, 5];
  function plus(value) {
    let plus4 = value.map((sum) => sum + 4);
    console.log(plus4);
  }
  plus(nums);
}

//###############################five######################################
console.log("5-");
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function MathAll(value) {
    let even = value.filter((num) => num % 2 === 0);
    let doubleEven = even.map((num) => num * 2);
    let sum = doubleEven.reduce((sum, num) => sum + num);
    console.log(sum);
  }
  MathAll(nums);
}

//###############################six######################################
console.log("6-");
{
  const fruits = ["apple", "banana", "cherry", "date"];
  function upperCase(value) {
    let upper = value.map((up) => up.toUpperCase());
    console.log(upper);
  }
  upperCase(fruits);
}

//###############################seven######################################
console.log("7-");
{
  const heros = [
    {
      name: "Iron Man",
      power: "Tech",
    },
    {
      name: "Spider Man",
      power: "Spider abilities",
    },
    {
      name: "Thor",
      power: "Godly powers",
    },
    {
      name: "Hulk",
      power: "Super strength",
    },
  ];
  function Heros(value) {
    let hero = value.map(function (name, index) {
      return {
        hero: name["name"],
        power: name["power"],
        id: index,
      };
    });
    console.log(hero);
  }
  Heros(heros);
}

//###############################eight######################################
console.log("8-");
{
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];
  function filtering(value) {
    let bigWord = value.filter((word) => word.length > 7);
    console.log(bigWord);
  }
  filtering(words);
}

//###############################nine######################################
console.log("9-");
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function MathAll(value) {
    let odd = value.filter((num) => num % 2 !== 0);
    console.log(odd);
    let evenDivi = value.filter((num) => num % 2 === 0 || num % 5 === 0);
    console.log(evenDivi);
    let oddDivi = odd.filter((num) => num % 3 === 0).map((num) => num ** 2);
    console.log(oddDivi);
    let divisible5 = value
      .filter((num) => num % 5 === 0)
      .map((num) => num ** 2);
    let oddSum = divisible5.reduce((sum, num) => sum + num);
    console.log(oddSum);
  }
  MathAll(nums);
}

//###############################ten######################################
console.log("10-");
{
  const nums = [11, 22, 33, 46, 75, 86, 97, 98];
  function MathAll(value) {
    let squiredEvenNums = value
      .filter((num) => num % 2 === 0)
      .map((num) => num ** 2);
    console.log(`squiredEvenNums: `, squiredEvenNums);
    let sum = value.reduce((sum, num) => sum + num);
    console.log(`Sum of array elements: ${sum}`);
  }
  MathAll(nums);
}

//###############################eleven######################################
console.log("11-");
{
  const countries = ["India", "United States", "Russia", "Japan", "China"];
  function methods(value) {
    let filteredCountries = value.filter(
      (country) => country.charAt(0) !== "U" && country.charAt(0) !== "R"
    );
    console.log(filteredCountries);
    let upperCaseCountries = filteredCountries.map((country) =>
      country.toUpperCase()
    );
    console.log(upperCaseCountries);
    let totalCharacters = upperCaseCountries.join("").length;
    console.log(totalCharacters);
  }
  methods(countries);
}

//###############################twelve######################################
console.log("12-");
{
  const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
  function filterBig(value) {
    let bigNums = value.filter((num) => num > 50);
    console.log(bigNums);
  }
  filterBig(numbers);
}
