const socket = io('http://localhost:3000');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');


const name = prompt('What is your name?')
appendMessage(`${name} has connected.`);
socket.emit('new-user', name);

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
    messageContainer.scrollTop = messageContainer.scrollHeight;
})

socket.on('user-connected', name => {
    appendMessage(`${name} has joined the chat.`);
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} has disconnected.`);
})

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}