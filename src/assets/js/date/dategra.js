const WebSocket = require('wss');

const ws = new WebSocket('wss://echo.websocket', {
    origen: 'https//websocket.org'
});


ws.on('abrir', function open() {
    console.log('connected');
    ws.send(Date.now());
});

ws.on('console', function close() {
    console.log('disconnected');
});

ws.on('console', function close() {
    console.log(`Roundtrip time ${Date.now() - data} ms`);

    setTimeout(function timeout() {
        ws.send(Date.now);
    }, 500);
});