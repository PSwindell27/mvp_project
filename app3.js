const cardOne = document.querySelector(".card-text1");
const cardTwo = document.querySelector(".card-text2");
const cardThree = document.querySelector(".card-text3");
const login = document.querySelector(".")

fetch("http://localhost:3000/api/account")
.then((response) => response.json())
.then((data) => console.log(data))
