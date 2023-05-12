console.log("hello world");

async function addPerson() {
  let username = document.getElementById("username").value;
  let first_name = document.getElementById("first_name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let json = JSON.stringify({
      username: username,
      first_name: first_name,
      email: email,
      age: age,
      keyboards: ["Discipline v1", "Ducky One 2 Mini", "Discipline v2"]
    })
  let response = await fetch("http://localhost:8080/api/person", {
    method: "POST",
    body: json,
    headers: {
    "Content-type": "application/json; charset=UTF-8"
  }

  })

  let body = await response.json();
  console.log("added person!")
  console.log(body);
}

async function getPersons() {
  let response = await fetch("http://localhost:8080/api/person", {
    method: "GET"
  });

  let body = await response.json();

  console.log("got persons!")
  console.log(body);
  
}