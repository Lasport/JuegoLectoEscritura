    var wsUri = "wss://localhost:6868";
    var output;

    var sesion = "";

    function init() {
        output = document.getElementById("output");
        testWebSocket();
    }

    function testWebSocket() {

        websocket = new WebSocket(wsUri);

        websocket.onopen = onOpen;

        websocket.onclose = onClose;

        websocket.onmessage = onMessage;

        websocket.onerror = onError;

    }

    function onOpen(evt) {
        writeToScreen("CONECTADO");
        //TOKEN
        //doSend('{"id": 1, "jsonrpc": "2.0", "method": "authorize", "params": { "clientId": "EfbSHf1hNcBW3iaTqGf4w7VcDBj0MuB2lWLkl7bL", "clientSecret":"QijCQzDBWDeqKkCIRSiUa9AWCDrby88FL5EF2LAah9BI096Svbh2i4l6xbPKf3ib3M9oonuKocsRD8dEks98PFDoBrYMl6xcMDjQk1xEvzpUMXbIs2gpm8vFIK9Sr0Ny"   }}');
        /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNvbS50ZXNlLm5ldyIsImFwcFZlcnNpb24iOiIxLjAiLCJleHAiOjE2MTM5ODA0ODMsIm5iZiI6MTYxMzcyMTI4MywidXNlcklkIjoiYjYwOTBiOWQtNjlmZi00ZGI2LTkxOWMtYmM4MjU4ODgzMDk2IiwidXNlcm5hbWUiOiJ0ZXNlIiwidmVyc2lvbiI6IjIuMCJ9.J+vlY3UbyVr0YFtpi2PpWmkGjXxWe5Ix0q4jhlRePCo=*/

        //Listar Diademas
        //doSend('{"id": 1,"jsonrpc": "2.0", "method": "queryHeadsets"}');
        /*
        RESPUESTA: {"id":1,"jsonrpc":"2.0","result":[{"connectedBy":"bluetooth","customName":"","dongle":"0","firmware":"930","headbandPosition":null,"id":"INSIGHT-A1D204AE","isDfuMode":false,"isVirtual":false,"motionSensors":[],"sensors":[],"settings":{"eegRate":0,"eegRes":0,"memsRate":0,"memsRes":0,"mode":"UNKNOWN"},"status":"discovered","virtualHeadsetId":""},{"connectedBy":"bluetooth","customName":"","dongle":"0","firmware":"625","headbandPosition":null,"id":"EPOCPLUS-3B9AEB22","isDfuMode":false,"isVirtual":false,"motionSensors":[],"sensors":[],"settings":{"eegRate":0,"eegRes":0,"memsRate":0,"memsRes":0,"mode":"UNKNOWN"},"status":"discovered","virtualHeadsetId":""}]}
        */

        //Crear ID de la sesión
        doSend('{"id": 1, "jsonrpc": "2.0","method": "createSession","params": {"cortexToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNvbS50ZXNlLm5ldyIsImFwcFZlcnNpb24iOiIxLjAiLCJleHAiOjE2Mzk1MzQ2OTksIm5iZiI6MTYzOTI3NTQ5OSwidXNlcklkIjoiY2ZkODJiZTctNmFjMi00MTNhLWJmY2EtOGZiM2ZlMmNiY2FlIiwidXNlcm5hbWUiOiJ0ZXNlIiwidmVyc2lvbiI6IjIuMCJ9.q7Z58zxeirkJPzfywf1Wlm0fgmpmAMGjI7s7455q2tw=", "headset": "EPOCX-E20206FB","status": "open"}}');
        //RESPUESTA: {"id":1,"jsonrpc":"2.0","result":{"appId":"com.tese.new","headset":{"connectedBy":"bluetooth","dongle":"0","firmware":"930","id":"INSIGHT-A1D204AE","isDfuMode":false,"isVirtual":false,"motionSensors":["Q0","Q1","Q2","Q3","ACCX","ACCY","ACCZ","MAGX","MAGY","MAGZ"],"sensors":["AF3","T7","Pz","T8","AF4"],"settings":{"eegRate":128,"eegRes":14,"memsRate":64,"memsRes":14,"mode":"INSIGHT"},"status":"connected","virtualHeadsetId":""},"id":"617ecb34-8a50-4c7f-bd78-aa94eccef869","license":"","owner":"tese","performanceMetrics":[{"apiName":"eng","displayedName":"Engagement","name":"engagement","shortDisplayedName":"En"},{"apiName":"exc","displayedName":"Excitement","name":"excitement","shortDisplayedName":"Ex"},{"apiName":"str","displayedName":"Stress","name":"stress","shortDisplayedName":"St"},{"apiName":"rel","displayedName":"Relaxation","name":"relaxation","shortDisplayedName":"Re"},{"apiName":"int","displayedName":"Interest","name":"interest","shortDisplayedName":"In"},{"apiName":"foc","displayedName":"Focus","name":"focus","shortDisplayedName":"Fo"}],"recordIds":[],"recording":false,"started":"2021-02-28T23:46:02.873-06:00","status":"opened","stopped":"","streams":[]}}

        //Suscripción
        //doSend('{"id": 1,"jsonrpc": "2.0","method": "subscribe","params": {"cortexToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNvbS50ZXNlLm5ldyIsImFwcFZlcnNpb24iOiIxLjAiLCJleHAiOjE2MTU0MTM3NjgsIm5iZiI6MTYxNTE1NDU2OCwidXNlcklkIjoiYjYwOTBiOWQtNjlmZi00ZGI2LTkxOWMtYmM4MjU4ODgzMDk2IiwidXNlcm5hbWUiOiJ0ZXNlIiwidmVyc2lvbiI6IjIuMCJ9.q0Zx+9/IY4GHjGLe6R1hot/KtGFz5EqbE4Iq00fbl90=",    "session": sesion,"streams": ["met","mot"]}}');
    }

    function onClose(evt) {
        writeToScreen("DESCONECTADO");
    }

    var etiquetas = [0, 1];
    var theta = [0, 1];
    var alpha = [0, 1];

    function onMessage(evt) {
        writeToScreen('<span style="color: blue;">RESPUESTA: ' + evt.data + '</span>');

        console.log(evt.data);
        //doSend('{"id": 1,"jsonrpc": "2.0", "method": "queryHeadsets"}');

        if (sesion == "") {
            let response = JSON.parse(evt.data);
            sesion = response.result['id'];
            doSend('{"id": 1,"jsonrpc": "2.0","method": "subscribe","params": {"cortexToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNvbS50ZXNlLm5ldyIsImFwcFZlcnNpb24iOiIxLjAiLCJleHAiOjE2Mzk1MzQ2OTksIm5iZiI6MTYzOTI3NTQ5OSwidXNlcklkIjoiY2ZkODJiZTctNmFjMi00MTNhLWJmY2EtOGZiM2ZlMmNiY2FlIiwidXNlcm5hbWUiOiJ0ZXNlIiwidmVyc2lvbiI6IjIuMCJ9.q7Z58zxeirkJPzfywf1Wlm0fgmpmAMGjI7s7455q2tw=",    "session": "' + sesion + '","streams": ["pow"]}}');
        }
        let response = JSON.parse(evt.data);
        theta.push(response.pow[1]);
        alpha.push(response.pow[2]);
        etiquetas.push(response.time);

        //Graficación de Theta
        var areaChartData = {
            labels: etiquetas,

            datasets: [{
                label: 'Theta',
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: theta
            }, {
                label: 'Alpha',
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: alpha
            }, ]
        }

        var areaChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: true
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }

        //-------------
        //- LINE CHART -
        //--------------
        var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
        var lineChartOptions = jQuery.extend(true, {}, areaChartOptions)
        var lineChartData = jQuery.extend(true, {}, areaChartData)
            //lineChartData.datasets[0].fill = false;
            //lineChartData.datasets[1].fill = false;
        lineChartOptions.datasetFill = false

        var lineChart = new Chart(lineChartCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            })
            //console.log(response.pow[1]);
            /*let response = JSON.parse(evt.data);
            //console.log(response.result['id']);
            let sesion = response.result['id']0;

            if(sesion === null) {
                //doSend('{"id": 1,"jsonrpc": "2.0","method": "subscribe","params": {"cortexToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNvbS50ZXNlLm5ldyIsImFwcFZlcnNpb24iOiIxLjAiLCJleHAiOjE2MTQ3NTAwNDQsIm5iZiI6MTYxNDQ5MDg0NCwidXNlcklkIjoiYjYwOTBiOWQtNjlmZi00ZGI2LTkxOWMtYmM4MjU4ODgzMDk2IiwidXNlcm5hbWUiOiJ0ZXNlIiwidmVyc2lvbiI6IjIuMCJ9.m+dfoPkKq8QPrkZbTGaUJISFadMEVUXqIh75M9wgods=", "session": sesion,"streams": ["met","mot"]}}');
            }*/

        //websocket.close();
    }

    function onError(evt) {
        writeTocreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

    function doSend(message) {
        writeToScreen("ENVIADO: " + message);
        websocket.send(message);
    }

    function writeToScreen(message) {
        var pre = document.createElement("p");
        pre.style.wordWrap = "break-word";
        pre.innerHTML = message;
        output.appendChild(pre);
    }

    window.addEventListener("load", init, false);

    var datos1 = [28, 48, 40, 19, 86, 27, 90, 22];
    var datos2 = [65, 59, 80, 81, 56, 55, 40, 25];
    datos1.push(100);
    datos2.push(88);

    datos1.push(120);
    datos2.push(120);
    console.log(datos1);
    console.log(datos2);

    console.log(theta);
    console.log(etiquetas);
