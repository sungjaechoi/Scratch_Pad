const employees = [
  { id: 1, name: "John", department: "HR", salary: 50000 },
  { id: 2, name: "Alice", department: "Engineering", salary: 80000 },
  { id: 3, name: "Bob", department: "Marketing", salary: 60000 },
  { id: 4, name: "Eva", department: "HR", salary: 55000 },
  { id: 5, name: "Charlie", department: "Engineering", salary: 75000 },
  { id: 6, name: "David", department: "Marketing", salary: 62000 },
];

//1.모든 직원의 총 급여를 구하십시오.
const toalleSalary = employees.reduce((acc, current) => {
    return acc + current.salary
  },0);
console.log("1.", toalleSalary);

//2.'Engineering' 부서에서 직원을 필터링합니다.
const EngineeringEmployees = employees.filter(
  (el) => el.department === "Engineering"
);
console.log("2.", EngineeringEmployees)

//3.급여별로 직원을 내림차순으로 정렬합니다.
const salaryClass = [...employees].sort((a, b) =>
  a.salary > b.salary ? 1 : a.salary < b.salary ? -1 : 0
);
console.log("3.",salaryClass)

//4.모든 직원의 소득이 $40,000 이상인지 확인하세요.
const salary40000MoreThen = employees.every((e)=> e.salary >= 40000)
console.log("4.", salary40000MoreThen)

//5.모든 직원의 이름으로 새 배열을 만듭니다.
const employeesName = employees.map((e) => e.name)
console.log("5.", employeesName);

//6.급여가 가장 높은 직원의 인덱스를 찾으십시오.
// const employeesMaxSalary = employees.reduce((acc, current) => acc > current.salary ? acc : current.salary)
// console.log("6.",employeesMaxSalary);

//6. chatGpt 피드백
const maxSalaryIndex = employees.reduce(
  (acc, current, index) =>{
    console.log(
      "current.salary",
      current.salary,
      "employees[acc].salary",
      employees[acc].salary,
      "index",
      index,
      "acc",
      acc
    );
    
    return current.salary > employees[acc].salary ? index : acc
  },0
);
console.log("6(chatGpt).", maxSalaryIndex);



//7.배열에서 ID가 3인 직원을 제거합니다.
const deleteID3 = employees.filter((e)=> e.id !== 3)
console.log("7.", deleteID3);


//8.'Finance' 부서에 소속된 직원이 있는지 확인하세요.
const findFinance = employees.some((e) => e.department === "Finance");
console.log("8.", findFinance)

console.log("*.", employees);