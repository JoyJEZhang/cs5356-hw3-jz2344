async function fetchDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log("the current query is fetched??");
    document.getElementById("dog-image").src = data.message;
}

// Load a randon dog image =w=
fetchDog();