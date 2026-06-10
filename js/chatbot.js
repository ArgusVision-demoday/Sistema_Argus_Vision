const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");

const sendButton = document.getElementById("sendButton");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const API_URL =
    "https://argusvision-api.onrender.com/api/chat";


const btnElion = document.getElementById("btnElion");

// Abrir chatbot pelo botão "Falar com Elion"
btnElion.addEventListener("click", () => {
    chatWindow.classList.toggle("active");
});


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

// Fechar chatbot usando ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chatWindow.classList.remove("active");
    }
});

async function sendMessage() {

    const text = chatInput.value.trim();

    if (!text) return;

    // Mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = text;

    chatMessages.appendChild(userMessage);

    // Limpa input
    chatInput.value = "";

    // Scroll
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Indicador de digitação
    const typingMessage = document.createElement("div");

    typingMessage.classList.add("bot-message");

    typingMessage.textContent = "Elion está digitando...";

    chatMessages.appendChild(typingMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensagem: text
            })
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP ${response.status}`);
        }

        const data = await response.json();

        // Remove o indicador de digitação
        typingMessage.remove();

        const messageRow = document.createElement("div");
        messageRow.classList.add("message-row");

        const avatar = document.createElement("img");
        avatar.src = "public/chatbot/elion-avatar.png";
        avatar.alt = "Elion";
        avatar.classList.add("message-avatar");

        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");

        botMessage.textContent = data.resposta;

        messageRow.appendChild(avatar);
        messageRow.appendChild(botMessage);

        chatMessages.appendChild(messageRow);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    catch (error) {

        console.error(error);

        // Remove o indicador de digitação
        typingMessage.remove();

        const errorMessage = document.createElement("div");

        errorMessage.classList.add("bot-message");

        errorMessage.textContent =
            "Desculpe, não consegui me conectar ao servidor do Elion.";

        chatMessages.appendChild(errorMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}