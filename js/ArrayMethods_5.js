const cities = [
  { name: "New York", population: 8398748, country: "USA" },
  { name: "Tokyo", population: 37797531, country: "Japan" },
  { name: "London", population: 8908081, country: "UK" },
  { name: "Paris", population: 2140526, country: "France" },
  { name: "Beijing", population: 21517462, country: "China" },
  { name: "Mumbai", population: 12442373, country: "India" },
];

//1.모든 도시의 전체 인구를 구합니다.
const toallPopulation = cities.reduce((acc , current) => (acc + current.population),0)
console.log("1.",toallPopulation)

//2.인구가 천만 명 이상인 도시를 필터링합니다.
const population10Million = cities.filter((el)=> el.population >= 10000000)
console.log("2.",population10Million)

//3.인구를 기준으로 도시를 내림차순으로 정렬합니다.
const citiPopulationDescendingorder = [...cities].sort((a, b) => a.population < b.population ? 0 : a.population > b.population ? -1 : 0)
console.log("3.",citiPopulationDescendingorder)

//4.'USA' 도시가 있는지 확인하세요.
const findUSA = cities.some((el)=> el.country === "USA" )
console.log("4.",findUSA)

//5.모든 도시의 이름으로 새 배열을 만듭니다.
const citiesName = cities.map((el)=> el.name)
console.log("5.",citiesName)

//6.인구가 가장 많은 도시의 인덱스를 찾아보세요.
const maxPopulation = cities.reduce((acc, current, index) => (cities[acc].population > current.population ? acc : index),0)
console.log("6.", maxPopulation)

//6.chatGpt 피드백
const maxPopulationIndex = cities.reduce(
  (acc, current, index) =>
    cities[acc].population > current.population ? acc : index,
  0
);
console.log("6(chatGpt).", maxPopulationIndex);


//7.배열에서 이름이 'Paris'인 도시를 제거합니다.
const deleteParis = cities.filter((el)=>el.name !== 'Paris')
console.log("7.",deleteParis);

//8.모든 도시의 인구가 100만 명 이상인지 확인하세요.
const checkMillionCities = cities.every((el) => el.population >= 1000000);
console.log("8.", checkMillionCities);

console.log("*.", cities);
