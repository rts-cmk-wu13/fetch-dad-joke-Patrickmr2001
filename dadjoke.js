fetch ("https://icanhazdadjoke.com/", {
    headers: {
        "accept": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))