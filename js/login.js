const loginForm = document.getElementById("login");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", e => {
    e.preventDefault();
    const username = login.name.value;
    const password = login.password.value;

    if ((username.toLowerCase() === "raja") && password === "raja1943") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "vijayalakshmi") && password === "vijayalakshmi1947") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "rajiv") && password === "rajiv1968") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "nisha") && password === "nisha1972") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "nitish") && password === "nitish2000") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "sanjiv") && password === "sanjiv1972") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "seema") && password === "seema1975") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "aryan") && password === "aryan2001") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "aman") && password === "aman2007") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "sachin") && password === "sachin1976") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "vardhika") && password === "vardhika1981") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "agrasha") && password === "agrasha2009") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "ajay") && password === "ajay1977") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "yashika") && password === "yashika1980") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "yashas") && password === "yashas2010") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "ajay") && password === "ajay1971") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "sneha") && password === "sneha1974") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "anay") && password === "anay2000") {
        window.location.href = "familytree.html";
    } else if ((username.toLowerCase() === "aanshi") && password === "aanshi2020") {
        window.location.href = "familytree.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});