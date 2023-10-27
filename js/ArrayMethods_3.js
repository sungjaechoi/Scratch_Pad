const transactions = [
  { id: 1, product: "Laptop", amount: 1200, date: "2023-01-15" },
  { id: 2, product: "Headphones", amount: 100, date: "2023-02-01" },
  { id: 3, product: "Mouse", amount: 20, date: "2023-02-10" },
  { id: 4, product: "Keyboard", amount: 80, date: "2023-03-05" },
  { id: 5, product: "Monitor", amount: 300, date: "2023-03-20" },
  { id: 6, product: "Printer", amount: 150, date: "2023-04-02" },
];

//1.모든 거래의 총액을 구합니다.
const toallAmount = transactions.reduce((acc, c) => {
  return c.amount + acc;
}, 0);
console.log("1.", toallAmount);

//2.$100보다 큰 금액의 거래를 필터링합니다.
const maxAmount100 = transactions.filter((el)=> el.amount > 100)
console.log("2.", maxAmount100);

//3.날짜별로 거래를 오름차순으로 정렬합니다.
// const dateAlignment = transactions.toSorted((a, b) => {
//   if (a.date > b.date) {
//     return -1;
//   }
//   if (a.date < b.date) {
//     return 1;
//   }
//   return 0;
// })

// 질문 => 코드를 줄이면? 가독성 측면에서 위가 낳은가? => 이중 삼항은 함정이다.

const dateAlignment = transactions.toSorted((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0);
console.log("3.", dateAlignment);

// 3. chatGpt 피드백
// 사용하려는 시도가 toSorted종료되었지만 JavaScript의 Array 개체에 내장된 메서드가 없습니다 toSorted. 대신 다음과 같이 메서드를 직접 사용할 수 있습니다 sort.
const chatGptdateAlignment = [...transactions].sort((a, b) =>
  a.date > b.date ? -1 : a.date < b.date ? 1 : 0
);
console.log("3(chatGpt).", chatGptdateAlignment);

//4.모든 거래가 전자제품(제품에는 '노트북', '헤드폰', '마우스' 등이 포함됨)과 관련되어 있는지 확인하세요.
const productIncludes = transactions.every(
  (el) => (el.product === "Laptop" | "Headphones" | "Mouse")
);
console.log("4.",productIncludes);


const a = ["Laptop" , "Headphones" , "Mouse"]

// 4. chatGpt 피드백
const chatGptproductIncludes = transactions.every(
  (el) => a.includes(el.product)
);

console.log("4(chatGpt).", chatGptproductIncludes);


//5.모든 트랜잭션의 ID로 새 배열을 만듭니다. => return시 객체를 리턴하고 내부애서 "프러퍼티" + "값"을 가져온다.
const idArray = transactions.map((el) => {
  return {
    id : el.id
  }
})
console.log("5-1(id 값만 추출하여 새 배열).", idArray);

const idArryObj = [];
transactions.forEach((el) => {
  let idObj = {};
  idObj["id"] = el.id;
  return idArryObj.push(idObj);
})
console.log( "5-2(객체까지 추출).",idArryObj);

//6.금액이 가장 높은 거래의 지수를 찾습니다.
const maxAmount = [...transactions].sort((a, b) => a.amount > b.amount ? -1 : a.amount < b.amount ?  1 : 0).slice(0,1);
console.log("6.",maxAmount[0].amount);

//6. chatGpt 피드백
const maxAmountTransaction = transactions.reduce((max, current) =>{
    console.log('대상:',max.amount, 
    '현재 El:',current.amount);
    return current.amount > max.amount ? current : max;
  });

console.log("6(chatGpt).", maxAmountTransaction.amount);

  
//7.배열에서 ID가 4인 트랜잭션을 제거합니다.
const deleteID = transactions.filter((el) => el.id !== 4)
console.log("7.",deleteID);

//8.2월에 거래가 발생했는지 확인하세요.
const dateArray = transactions.map((el) => el.date)
const dateSlice = [];
dateArray.forEach((el) => {
  dateSlice.push(el.substring(0,7))
});
const FebDealCheck = dateSlice.some((el)=> el === '2023-02');

console.log("8(추출).", dateArray);
console.log("8(가공).", dateSlice);
console.log("8(확인).", FebDealCheck);

//8. chatGpt 피드백
const chatGptFebDealCheck = transactions.some((el) =>
  el.date.startsWith("2023-02")
);

console.log("8(chatGpt).", chatGptFebDealCheck);

  console.log("*.", transactions);