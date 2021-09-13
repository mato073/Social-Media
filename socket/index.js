const io = require("socket.io")(8089, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

const client = [];

const addUser = (userId, soketId) => {
  !client.some(user => user.userId === userId) && client.push({ userId, soketId })
}

io.on('connection', (socket) => {
  socket.on('addUser', userId => {
    addUser(userId, socket.id)
  })

})