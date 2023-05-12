console.log("hello world");

async function addNote() {
    let title = document.getElementById("title").value;
    let note_text = document.getElementById("note_text").value;
    let json = JSON.stringify({
        title: title,
        note_text: note_text,
    })
    let response = await fetch("http://localhost:8080/api/note", {
        method: "POST",
        body: json,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })

    let body = await response.json();
    console.log("added note!")
    console.log(body);
}

async function getNotes() {
    let response = await fetch("http://localhost:8080/api/note", {
        method: "GET"
    });

    let body = await response.json();

    console.log("got notes!")
    console.log(body);

}