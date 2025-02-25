async function getTarotReading() {
    const resultDiv = document.getElementById("tarot-output");
    resultDiv.innerHTML = "Shuffling the deck... 🔮"; // Loading text

    try {
        // Fetch a random tarot card
        const response = await fetch("https://tarotapi.dev/api/v1/cards/random?n=1");
        const data = await response.json();

        if (data.cards && data.cards.length > 0) {
            const card = data.cards[0]; // Get the first card from the response
            resultDiv.innerHTML = `<strong>${card.name}</strong>: ${card.meaning_up} <br> <em>${card.desc}</em>`;
        } else {
            resultDiv.innerHTML = "No card found. Try again!";
        }
    } catch (error) {
        console.error("Error fetching tarot reading:", error);
        resultDiv.innerHTML = "Something went wrong! Please try again later.";
    }
}