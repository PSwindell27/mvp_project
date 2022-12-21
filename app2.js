fetch("/api/account")
.then((res) => res.json())
.then((data) => {
    console.log(data)
});

const createUserForm = document.querySelector(".create-user-form");

// const firstName = document.querySelector("#form3Example1cg");
const loginForm = document.querySelector(".login-form");


loginForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const data = new FormData(event.target);
debugger;
    const login = { firstName: data.get("firstName"), email: data.get("email") };
    const {firstName, email} = login;
    console.log(firstName, email);
    
    
    fetch("http://localhost:3000/api/account").then((data) =>{
        console.log(data);
        data.json();
    }).then((data) =>{
        console.log(data);
    })
});



// createUserForm.addEventListener('submit', (event) => {
// event.preventDefault();
// const data = new FormData(event.target);
// const newUser = {
// first_name: data.get("firstName"), 
// last_name: data.get("lastName"), 
// username: data.get("username"),
// email: data.get("email")
// };
// console.log(newUser);
// });