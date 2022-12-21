// fetch("/account")
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// });

const createNewUser = document.querySelector(".create-user-form");

createNewUser.addEventListener("submit", (event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    
    const newUser = {firstName: data.get("firstName"), lastName:  data.get("lastName"), email: data.get("email"), userName: data.get("userName")};
    console.log(newUser);
    fetch("http://localhost:3000/account", {
        method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
        body: JSON.stringify(newUser)
    })
});