# ByteTalk

A simple real-time chat app I made while learning Node.js and Socket.IO. You open it in the browser, enter your name and chat with anyone else who has the page open.

## What it does

- Asks for your name when you open the page
- Sends and receives messages instantly (no refreshing)
- Shows a notice when someone joins or leaves the chat
- Plays a sound when you get a message or someone joins
- Your messages show on the right (blue), others on the left (white)
- Works on mobile screens too

## Built with

- HTML and CSS
- JavaScript
- Node.js
- Socket.IO

## Project files

```
ByteTalk/
├── index.html      page and styling
├── server.js       Node server (Socket.IO)
├── JS/
│   └── client.js   client side code
├── ByteTalk.png    logo
├── chatbg.jpg      background image
├── ding.mp3        message sound
└── join.mp3        join sound
```

## How to run it

You need Node.js installed.

1. Download or clone this repo
2. Open a terminal in the project folder and install the packages

   ```
   npm install socket.io cors
   ```

3. Start the server

   ```
   node server.js
   ```

4. Open `index.html` in your browser (or use Live Server in VS Code)
5. Enter your name. Open the page in another tab or window with a different name to test the chat

The server runs on port 8000, so make sure nothing else is using it.

## How it works

The server listens for events from the browsers. When someone sends a message, the server passes it on to everyone else using `socket.broadcast.emit`. It also keeps a list of users so it can say who left when a socket disconnects.

## Things I want to add

- Deploy it online (right now it only works on localhost)
- Save old messages
- Show who is typing
- A list of online users

## Author

Muhammad Kashif
