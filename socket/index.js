const io = require("socket.io")(8089, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

let clients = [];

const addUser = (userId, socketId) => {
  !clients.some(user => user.userId === userId) &&
    clients.push({ userId, socketId })
}

const removerUser = (socketId) => {
  clients = clients.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
  const user = clients.find((user) => user.userId === userId)
  return user
}

io.on('connection', (socket) => {

  socket.on('addUser', userId => {
    addUser(userId, socket.id)
    io.emit('getUsers', clients)
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
    io.emit('getUsers', clients)
  })
})