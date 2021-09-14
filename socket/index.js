const io = require("socket.io")(8089, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

let client = [];

const addUser = (userId, socketId) => {
  !client.some(user => user.userId === userId) &&
    client.push({ userId, socketId })
}

const removerUser = (socketId) => {
  client = client.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
  const user = client.find((user) => user.userId === userId)
  return user
}

io.on('connection', (socket) => {
  socket.on('addUser', userId => {
    addUser(userId, socket.id)
  })

  socket.on('sendMessage', ({ userId, reciverId, text }) => {
    const reciver = getUser(reciverId)
    socket.to(reciver.socketId).emit('newMessage', {
      sender: userId,
      text
    });
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
    removerUser(socket.id)
  })
})