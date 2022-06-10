/* sending request */
let response = fetch("./src/education.json")

fetch("./src/education.json")
    .then(response => {
        return response.json;
    })
    .catch(error => {
        console.log(error);
    });

/* Resolve the promise using the Response class */

fetch("./src/education.json")
    .then(response => {
       return response.json();
    })
    .then(jsondata => console.log(jsondata));

/*async function fetchText() {
    let response = await fetch("./src/education.json");
    let data = await response.text();
    console.log(data);
} */

/*Check the status code of the response*/
async function fetchText() {
    let response = await fetch("./src/education.json");

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

fetchText();
