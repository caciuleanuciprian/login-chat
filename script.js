



const socket = io('/');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

const name = localStorage.getItem('1');

appendMessage(`${name} has connected ecran principal`);
socket.emit('new-user', name);

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
})

socket.on('user-connected', name => {
    appendMessage(`${name} connected celalalt`);
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected celalalt`);
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