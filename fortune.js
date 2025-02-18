async function getFortune() {
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;

    if (!name || !birthdate) {
        alert("Please enter your name and birthdate!");
        return;
    }

    const apiUrl = `https://cantian.fateapi.com/api/fortune?name=${encodeURIComponent(name)}&birthdate=${encodeURIComponent(birthdate)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        document.getElementById("fortune-output").innerText = data.fortune || "No result, try again!";
    } catch (error) {
        document.getElementById("fortune-output").innerText = "Error fetching fortune. Please try again.";
    }
}