const loginForm = document.getElementById("login");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", e => {
    e.preventDefault();
    const username = login.name.value;
    const password = login.password.value;

    if (username === "raja" && password === "raja1943") {
        window.location.href = "familytree.html";
    } else if (username === "vijayalakshmi" && password === "vijayalakshmi1947") {
        window.location.href = "familytree.html";
    } else if (username === "rajiv" && password === "rajiv1968") {
        window.location.href = "familytree.html";
    } else if (username === "nisha" && password === "nisha1972") {
        window.location.href = "familytree.html";
    } else if (username === "nitish" && password === "nitish2000") {
        window.location.href = "familytree.html";
    } else if (username === "sanjiv" && password === "sanjiv1972") {
        window.location.href = "familytree.html";
    } else if (username === "seema" && password === "seema1975") {
        window.location.href = "familytree.html";
    } else if (username === "aryan" && password === "aryan2001") {
        window.location.href = "familytree.html";
    } else if (username === "aman" && password === "aman2007") {
        window.location.href = "familytree.html";
    } else if (username === "sachin" && password === "sachin1976") {
        window.location.href = "familytree.html";
    } else if (username === "vardhika" && password === "vardhika1981") {
        window.location.href = "familytree.html";
    } else if (username === "agrasha" && password === "agrasha2009") {
        window.location.href = "familytree.html";
    } else if (username === "ajay" && password === "ajay1977") {
        window.location.href = "familytree.html";
    } else if (username === "yashika" && password === "yashika1980") {
        window.location.href = "familytree.html";
    } else if (username === "yashas" && password === "yashas2010") {
        window.location.href = "familytree.html";
    } else if (username === "ajay" && password === "ajay1971") {
        window.location.href = "familytree.html";
    } else if (username === "sneha" && password === "sneha1974") {
        window.location.href = "familytree.html";
    } else if (username === "anay" && password === "anay2000") {
        window.location.href = "familytree.html";
    } else if (username === "aanshi" && password === "aanshi2020") {
        window.location.href = "familytree.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});