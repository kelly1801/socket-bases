const socket = io();
const onBtn = document.querySelector("#on");
const offBtn = document.querySelector("#off");
const sendBtn = document.querySelector("#sendBtn");
const txtMessage = document.querySelector("#txtMessage");
socket.on("connect", () => {
//   console.log("the conected is tantalizing");
  off.style.display = "none";
  on.style.display = "";
});
socket.on("disconnect", () => {
//   console.log("the disconecting is tantalizing");
  on.style.display = "none";
  off.style.display = "";
});

socket.on('send-message', (payload) => {
    console.log(payload)
})
sendBtn.addEventListener('click', function() {
    // custom socket event
    const message = txtMessage.value
    const payload = {
        message,
        id: 'tantalzingid',
        date: new Date().getTime(),
        and: 'tantalizing object'
    }
    socket.emit('send-message',  payload, (id) => {
console.log('from server ' + id)
    })
})