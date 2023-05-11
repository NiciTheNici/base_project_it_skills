console.log("hello world");

async function addPerson() {
  let json = JSON.stringify({
      username: "Nici",
      first_name: "Nicolas",
      email: "nicolas@example.com",
      age: 17,
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