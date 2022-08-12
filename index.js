// Add your code here

const { assertLiteral } = require("babel-types");
const { json } = require("body-parser")
const { userInfo } = require("os")

function submitData (name, email){

    return fetch('http://localhost:3000/users', {

    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email,
    })
})
.then(function (response) {
    return response.json();
})

.then (function (object) {
    document.body.innerHTML = object ["id"]
})

.catch(function (error) {
    alert ("Something is wrong!");
    document.body.innerHTML = error.message
})
}