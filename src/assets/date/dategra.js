const socket = io('wss://localhost:6868');

socket.on("connect", data => {
    console.log(data);
    agregarMensaje(data);
});
