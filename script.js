function copyCode(version) {
    let code;
    if (version === 'java') {
        code = "Java-Server-Code hier";
    } else {
        code = "Bedrock-Server-Code hier";
    }

    navigator.clipboard.writeText(code).then(() => {
        const message = document.getElementById('message');
        message.innerHTML = "Code kopiert!";
        message.style.display = "block";
        
        const checkmark = document.createElement('img');
        checkmark.src = "checkmark.svg"; // Pfad zum Haken-Bild
        checkmark.className = "checkmark";
        document.querySelector('.popup-content').appendChild(checkmark);
        
        setTimeout(() => {
            message.style.display = "none";
            checkmark.style.display = "block";
        }, 1000);
    });
}
