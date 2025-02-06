fetch("https://icanhazdadjoke.com/", {
    headers: {
        "accept": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    document.querySelector(".joke").innerText = data.joke;
})
