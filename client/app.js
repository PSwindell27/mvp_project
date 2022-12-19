
fetch("/api/account")
.then((res) => res.json())
.then((data) => {
    console.log(data);
});