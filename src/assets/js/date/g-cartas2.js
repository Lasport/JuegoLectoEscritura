var cartas = new Array( 
    {nombre: '<img src="./../../../assets/Bear.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Bear.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Bee.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Bee.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Chameleon.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Chameleon.png" width="100" height="100">', seleccion: false},

    {nombre: '<img src="./../../../assets/Cow.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Cow.png" width="100" height="100">', seleccion: false},
     
    {nombre: '<img src="./../../../assets/Duck.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Duck.png" width="100" height="100">', seleccion: false}, 

    {nombre: '<img src="./../../../assets/Elephant.png" width="100" height="100">', seleccion: false},
    {nombre: '<img src="./../../../assets/Elephant.png" width="100" height="100">', seleccion: false},
  

    );
      
  var intentos = 0;
  var jugada1 = "";
  var jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego() {  
    var dato = document.getElementById("juego");
  
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 12 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i );
      dato.dataset.valor = carta;
    }
  }

  
  function girarCarta(){
    var evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
    if (jugada1 !== ""){
      if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true 
      && cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "lightgreen", jugada2);
        colorCambio(identificadorJ1, "lightgreen", jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        var self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "aquamarine", " ")
          colorCambio(self.identificadorJ2, "aquamarine", " ")
          vaciar()
        },200);
  
        colorCambio(identificadorJ2, "white", jugada2);
      }
    }else if(jugada2 !== "valor"){
  
      colorCambio(identificadorJ2, "white", jugada2);
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2;
    }
  };
  
  function vaciar(){
    jugada1 = "";
    jugada2 = "";
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio(posicion, color, contenido){
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  } 
  
  function comprobar(){
    var aciertos = 0;
    for(var i = 0 ; i < 12 ; i++){
      if (cartas[i].seleccion == true){
        aciertos ++;
      }
    }
  
    if(aciertos == 12){
      document.getElementById("mensaje").innerHTML = "GANASTE";
    }
  }
  
  function resetearJuego(){
        cartas.sort(function() {return Math.random() - 0.5});
        for (var i = 0; i < 12 ; i++){
          var carta = cartas[i].nombre;
          var dato = document.getElementById(i);
          dato.dataset.valor = carta;
          colorCambio(i, 'aquamarine', ' ');
        }
    };


    var h1 = document.getElementsByTagName('h1')[0];
    var start = document.getElementById('strt');
    var stop = document.getElementById('stp');
    var reset = document.getElementById('rst');
    var sec = 0;
    var min = 0;
    var hrs = 0;
    var t;
    
    function tick(){
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
    function add() {
        tick();
        h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
               + ":" + (min > 9 ? min : "0" + min)
                + ":" + (sec > 9 ? sec : "0" + sec);
        timer();
    }
    function timer() {
        t = setTimeout(add, 1000);
    }
    
    timer();
    start.onclick = timer;
    stop.onclick = function() {
        clearTimeout(t);
    }
    reset.onclick = function() {
        h1.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
    }