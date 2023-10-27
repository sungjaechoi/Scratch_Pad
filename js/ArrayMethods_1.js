const scores = [85, 90, 92, 78, 88, 95, 80, 87, 91, 89];
// 1.수업의 평균 점수를 찾아보세요.
const Average = scores.reduce((pav, acc) => pav + acc) / scores.length;
console.log("1. 수업의 평균 점수: ", Average);

// 수업점수 60 초과 갯수
const a = scores.filter((el) => el > 60).length
console.log(a)

//2. 85점 미만의 점수를 필터링합니다.
const filterOut85 = scores.filter((p) => 85 > p);
console.log("2. 85점 미만: ", filterOut85);

//3. 남은 점수를 내림차순으로 정렬합니다.
const descendingOrder = filterOut85.sort((a, b) => b - a);
console.log("3. 85점 미만 내림차순: ", descendingOrder);

//4. 100점을 받은 학생이 있는지 확인하세요.
const Perfect = scores.every((p) => p === 100);
console.log("4. 100점을 받은 학생 확인: ", Perfect);

//5. 각 학생의 점수를 두 배로 늘리는 새 배열을 만듭니다.
const pointTwice = scores.map((p) => p * 2);
console.log("5. 학생의 점수를 두 배: ", pointTwice);

//6. 90을 초과하는 첫 번째 점수의 지수를 찾으세요.
const firstOver90 = scores.find((p) => p > 90);
console.log("6. 90을 초과하는 첫 번째 점수의 지수: ", firstOver90);

//7. 가장 낮은 점수 2개를 제거합니다.
const scoredAlignment = [...scores]
  .sort((a, b) => b - a)
  .slice(0, scores.length - 2);
console.log("7. 가장 낮은 점수 2개: ", scoredAlignment);

//8. 모든 점수가 합격인지 확인합니다(70점 이상)
const allPass = scores.every((p) => p >= 70);
console.log("8. 모든 점수가 합격:  ", allPass);
