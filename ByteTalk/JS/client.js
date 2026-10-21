const socket = io('http://localhost:8000');
const messageform = document.getElementById('form');
const usermessage = document.getElementById('usermessage');
const sendmessage = document.getElementById('sendmessage');
const connectcontainer = document.querySelector('.connectcontainer');
const messagecontainer = document.querySelector('.messagecontainer');



audio = {
    audio1: new Audio('ding.mp3'),
    audio2: new Audio('join.mp3')
}
// const  audio  = new Audio('ding.mp3');
// const joinaudio = new Audio('join.mp3');

socket.on('chat-message', data => {
    console.log(data);
});
const userjoinleft = (message) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('users-connect');
    // messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    messagecontainer.scrollTop = messagecontainer.scrollHeight; 
    // joinaudio.play();
    audio.audio2.play();
}

var uname;

do {
    
    uname = prompt("Enter your name?");
} while (!uname);
userjoinleft(`You joined`, 'right')
socket.emit('newuserjoined', uname);

socket.on('user-joined', uname => {
    userjoinleft(`${uname} joined the chat`);
});

socket.on('userdisconnected', (user) => {
    userjoinleft(`${user} left the chat`);
})


sendmessage.addEventListener('click', e => {
    e.preventDefault();
    let data = {
        user: uname,
        msg: usermessage.value
    };
    if (usermessage.value!=''){
        appendMessage({user: 'You', msg: usermessage.value}, 'right');
        socket.emit('userMessage', data);
        usermessage.value = ''
    }
});

function appendMessage(data, status){
    const div = document.createElement('div');
    let content = `${data.user}: ${data.msg}`;
    div.innerText = content;
    div.classList.add('message');
    div.classList.add(status);
    messagecontainer.appendChild(div);
    messagecontainer.scrollTop = messagecontainer.scrollHeight; 
    if(status == 'left'){
        audio.audio1.play();

    }
}


socket.on('message', (data)=>{
    appendMessage(data, 'left');
});

