export const socketController = (socket) => {
  console.log("client is connected", socket.id);

  socket.on("disconnect", () => {
    console.log("client is disconnected".socket.id);
  });

  socket.on("send-message", (payload, callback) => {
    const id =  123456;
    callback(id);
    socket.broadcast.emit("send-message", payload);
  });
};
