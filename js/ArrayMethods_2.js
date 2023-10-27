//도서관에 책을 나타내는 객체 배열
const library = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    pages: 224,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pages: 336,
  },
  { title: "1984", author: "George Orwell", genre: "Dystopian", pages: 328 },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pages: 180,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 310,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    pages: 279,
  },
];

console.log("Data", library);

//장르가 픽션이고 페이지수가 200미만 추출
const a = library.filter((el) => el.genre === "Fiction" && el.pages < 200)

//페이지수가 200미만 인것들에 패이지에 총합 
const b = library.reduce((acc, current) => {
  return current.pages < 200 ? acc + current.pages : acc
},0)

// 1.라이브러리의 총 페이지 수를 찾습니다.
const toTall = library.reduce((acc, c) => {
  return acc + c.pages;
}, 0);
console.log("1.라이브러리의 총 페이지 :", toTall);

// 2.'소설' 장르의 책을 필터링합니다.
const fictions = library.filter((item) => item["genre"] === "Fiction");
console.log("2.'소설' 장르의 책을 필터링 :", fictions);

// 3. 페이지 수에 따라 책을 오름차순으로 정렬합니다.
const pageAscendingOrderBooks = [...library].sort((a, b) => {
  if (a.pages > b.pages) {
    return 1;
  }
  if (a.pages < b.pages) {
    return -1;
  }
  return 0;
});

console.log(
  "3. 페이지 수에 따라 책을 오름차순 정렬 :",
  pageAscendingOrderBooks
);

// 4. 400페이지가 넘는 책이 있는지 확인하세요.
const than400Pages = library.every((book) => book.pages > 400);
console.log("4. 400페이지가 넘는 책이 있는지 확인 :", than400Pages);

// 5. 모든 책의 제목으로 새 배열을 만듭니다.
const bookTitle = library.map((item) => item.title);
console.log("5. 모든 책의 제목으로 새 배열 :", bookTitle);

// 6. 제목이 '1984'인 책의 색인(index)을 찾으세요.
const findIndex = library.findIndex((item) => item.title === "1984");
console.log("6. 제목이 '1984'인 책의 색인(index):", findIndex);
//질문 - '1984'라는 조건이 어떤 프러퍼티에 있는지 부정확할떄 어떻게 하야 할까?
//질문 chatGPT 해답 - '1984'라는 조건이 어떤 프러퍼티에 있는지 부정확할떄 어떻게 하야 할까?
const findBook = library.find(
  (book) => book.title.includes("1984") || book.author.includes("1984")
);
console.log("6(chatGPT).제목이 '1984'인 책의 색인(index):", findBook);

// 7. 도서관에서 'The Great Gatsby'라는 제목의 책을 ​​삭제하세요.
function findTitle(array, string) {
  const index = array.findIndex((book) => book.title === string);
  array.splice(index, 1);
}
findTitle(library, "The Great Gatsby");

// const deleteBook = library.splice(findTitle(library, "The Great Gatsby"), 1);
// console.log(findTitle(library, "The Great Gatsby"));
console.log("7. 도서관에서 'The Great Gatsby'라는 제목의 책을 ​​삭제", library);

//7.chatGPT
const updatedLibrary = library.filter(
  (book) => book.title !== "The Great Gatsby"
);
console.log(
  "7(chatGPT). 도서관에서 'The Great Gatsby'라는 제목의 책을 삭제",
  updatedLibrary
);

// 8. 모든 책이 한 명의 저자에 의해 집필되었는지 확인하십시오(이 경우 'JD Salinger'로 가정).
const allAuthor = library.every((book) => book.author === "JD Salinger");
console.log("8. 모든 책이 한 명의 저자에 의해 집필되었는지 확인:", allAuthor);
