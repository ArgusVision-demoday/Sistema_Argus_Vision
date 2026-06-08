const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");

const sendButton = document.getElementById("sendButton");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// Abrir e fechar chatbot pelo mascote
chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("active");
});

// Fechar chatbot pelo X
closeChat.addEventListener("click", () => {
    chatWindow.classList.remove("active");
});

// Enviar mensagem ao clicar
sendButton.addEventListener("click", sendMessage);

// Enviar mensagem ao pressionar Enter
chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Fechar o chatbot usando o Esc
closeChat.addEventListener("click", () => {
    chatWindow.classList.remove("active");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chatWindow.classList.remove("active");
    }
});

function sendMessage() {

    const text = chatInput.value.trim();

    if (!text) return;

    // Mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = text;

    chatMessages.appendChild(userMessage);

    // Limpa input
    chatInput.value = "";

    // Scroll para baixo
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Resposta automática do Elion
    setTimeout(() => {

        const messageRow = document.createElement("div");
        messageRow.classList.add("message-row");

        const avatar = document.createElement("img");
        avatar.src = "public/chatbot/elion-avatar.png";
        avatar.alt = "Elion";
        avatar.classList.add("message-avatar");

        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");

        botMessage.textContent =
            "Recebi sua mensagem! Em breve poderei responder automaticamente.";

        messageRow.appendChild(avatar);
        messageRow.appendChild(botMessage);

        chatMessages.appendChild(messageRow);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 1000);
}