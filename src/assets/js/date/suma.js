let operacion = document.getElementById("operacion"),
    resul = document.getElementById("resul"),
    selec = document.getElementById("selec"),
    boton = document.getElementById("boton");
var imgX = "",
    imgY = "",
    imgZ = "";
var x = Math.floor(Math.random() * 6),
    y = Math.floor(Math.random() * 6),
    z = "";
var aciertos = 0,
    errores = 0;

var misImagenes = new Array(
    '<img src="./../../../assets/Numbers/zero.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/one.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/two.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/three.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/four.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/five.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/six.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/seven.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/eight.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/nine.jpg" width="150" height="150">',
    '<img src="./../../../assets/Numbers/ten.jpg" width="150" height="150">'
);

cargaimagen()

function cargaimagen() {
    let botones = [];
    for (i = 0; i <= 10; i++) {
        botones.push(`<button type="button" class="btn btn-outline-success" onclick="number(${i})">` + misImagenes[i] + `</button>`);
    }
    botones.sort(function() { return Math.random() - 0.5 });
    boton.innerHTML = botones;
}

function generarsum() {
    z = x + y;
    imgX = misImagenes[x];
    imgY = misImagenes[y];
    imgZ = misImagenes[z];

    operacion.innerHTML = (`<h1>Cuanto es <br> ` +
        imgX +
        ` <img src="./assets/symbol/sum.png" width="100" height="100"> ` +
        imgY +
        ` <img src="./assets/symbol/same.png" width="100" height="100"> ` +
        `</h1>`);
    resul.innerHTML = `<button type="button" class="btn btn-info" onclick="sum()">Enviar</button>`;
}

function sum() {
    generarsum()

    if (seleccionado !== "") {

        if (seleccionado == z) {
            resul.innerHTML = `<h1>Es correcto  <br>` +
                imgX + ` <img src="./assets/symbol/sum.png" width="100" height="100"> ` +
                imgY + ` es ` + imgZ + `</h1><button type="button" class="btn btn-success" onclick="generarsum()">Siguiente</button>`;
            operacion.innerHTML = "";
            selec.innerHTML = [];
            x = Math.floor(Math.random() * 6);
            y = Math.floor(Math.random() * 6);
            seleccionado = "";
            cargaimagen();
            aciertos++;
            fin();

        } else if (seleccionado !== z || seleccionado == "") {
            resul.innerHTML = `<h4>Incorrecto</h4><br>
            <h6>Intenta de nuevo</h6> <div id="resul">
            <button type="button" class="btn btn-danger"o onclick="generarsum()">Intentar</button>`;
            selec.innerHTML = [];
            errores++;
            fin();
        }
    }
}

seleccionado = "";

function number(r) {
    if (r == 1) {
        seleccionado = 1;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 2) {
        seleccionado = 2;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 3) {
        seleccionado = 3;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 4) {
        seleccionado = 4;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 5) {
        seleccionado = 5;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 6) {
        seleccionado = 6;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 7) {
        seleccionado = 7;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 8) {
        seleccionado = 8;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 9) {
        seleccionado = 9;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 0) {
        seleccionado = 0;
        selec.innerHTML = misImagenes[seleccionado];
    } else if (r == 10) {
        seleccionado = 10;
        selec.innerHTML = misImagenes[seleccionado];
    }
}

fin()

function fin() {
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `<h1>Acietos: ` + aciertos +
        `<br>Errores ` + errores + `/3</h1>`;
    if (aciertos == 5) {
        document.getElementById("mensaje").innerHTML = "GANASTE " + `<button type="button" class="btn btn-success" onclick="generarsum()">Jugar de Nuevo</button>`;
        resul.innerHTML = "";
        operacion.innerHTML = "";
        selec.innerHTML = [];
        aciertos = 0;
        errores = 0;


    } else if (errores == 3) {
        document.getElementById("mensaje").innerHTML = "PERDISTE " +
            `<button type="button" class="btn btn-danger" onclick="generarsum()">Intentar Nuevamente</button>`;
        resul.innerHTML = "";
        operacion.innerHTML = "";
        selec.innerHTML = [];
        aciertos = 0;
        errores = 0;
        let res1;
        let res2;
        let res3;
        let res4;
        let res5;
        let mydiv = document.getElementById("content");

        function getResultado() {


            mydiv.innerHTML = `
    <div class="second-content" style:center>

    <h1 id="inf">¿Cuanto es 1+2?</h1>

    <select name="" id="formi">
            <option value="3" id="primeraOpcion">3</option>
            <option value="1" id="segundaOpcion">1</option>

        </select>

    <input id="enter" type="submit" onclick="getRes()">
    </div>
        `;




        }

        function getRes() {
            let res1 = document.getElementById("formi").value;
            console.log(res1);
            if (res1 == 3) {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>1+2=3 ES CORRECTO</p>

        <h1 id = "inf" > ¿Cuanto es 2x4 ? </h1>
        <select name="" id="formi">
            <option value="4" id="primeraOpcion">4</option>
            <option value="8" id="segundaOpcion">8</option>

        </select>
    <input id="enter" type="submit" onclick="getRes2()">
    </div>
        `;
                console.log("correcto");


            } else {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>1+2=1 ES INCORRECTO, PORFAVOR INTENTA DE NUEVO HASTA LOGRARLO</p>
        <h1 id="inf">¿Cuanto es 1+2?</h1>
    <select name="" id="formi">
            <option value="3" id="primeraOpcion">3</option>
            <option value="1" id="segundaOpcion">1</option>

        </select>
    <input id="enter" type="submit" onclick="getRes()">
    </div>
        `
                console.log("intenta de nuevo")
            }

        }

        function getRes2() {

            res2 = document.getElementById("formi").value;
            console.log(res2);
            if (res2 == 8) {
                console.log("correcto 2");
                mydiv.innerHTML = `
        <div class="second-content">
        <p>2X4=8 ES CORRECTO</p>

        <h1 id = "inf" > ¿Cuanto es 10/2 ? </h1>
        <select name="" id="formi">
            <option value="5" id="primeraOpcion">5</option>
            <option value="3" id="segundaOpcion">3</option>

        </select>
    <input id="enter" type="submit" onclick="getRes3()">
    </div>
        `;

            } else {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>2X4=4 ES INCORRECTO, PORFAVOR INTENTA DE NUEVO HASTA LOGRARLO</p>
        <h1 id = "inf" > ¿Cuanto es 2x4 ? </h1>
        <select name="" id="formi">
            <option value="4" id="primeraOpcion">4</option>
            <option value="8" id="segundaOpcion">8</option>

        </select>
    <input id="enter" type="submit" onclick="getRes2()">
    </div>
        `
                console.log("intenta de nuevo 2")
            }
        }

        function getRes3() {

            res3 = document.getElementById("formi").value;
            console.log(res3);
            if (res3 == 5) {
                console.log("correcto 3");
                mydiv.innerHTML = `
        <div class="second-content">
        <p>10/2=5 ES CORRECTO</p>
        <h1 id = "inf" > ¿Cuanto es 56+4 ? </h1>
        <select name="" id="formi">
            <option value="60" id="primeraOpcion">60</option>
            <option value="62" id="segundaOpcion">62</option>

        </select>
    <input id="enter" type="submit" onclick="getRes4()">
    </div>
        `;

            } else {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>10/2=3 ES INCORRECTO, PORFAVOR INTENTA DE NUEVO HASTA LOGRARLO</p>
        <h1 id = "inf" > ¿Cuanto es 10/2 ? </h1>
        <select name="" id="formi">
            <option value="5" id="primeraOpcion">5</option>
            <option value="3" id="segundaOpcion">3</option>

        </select>
    <input id="enter" type="submit" onclick="getRes3()">
    </div>
        `
                console.log("intenta de nuevo 3")
            }
        }

        function getRes4() {

            res4 = document.getElementById("formi").value;
            console.log(res4);
            if (res4 == 60) {
                console.log("correcto 4");
                mydiv.innerHTML = `
        <div class="second-content">
        <p>56+4=60 ES CORRECTO</p>

        <h1 id = "inf" > ¿Cuanto es 2x2 + 2? </h1>
        <select name="" id="formi">
            <option value="9" id="primeraOpcion">9</option>
            <option value="6" id="segundaOpcion">6</option>

        </select>
    <input id="enter" type="submit" onclick="getRes5()">
    </div>
        `;

            } else {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>56+4=62 ES INCORRECTO, PORFAVOR INTENTA DE NUEVO HASTA LOGRARLO</p>
        <h1 id = "inf" > ¿Cuanto es 56+4 ? </h1>
        <select name="" id="formi">
            <option value="60" id="primeraOpcion">60</option>
            <option value="62" id="segundaOpcion">62</option>

        </select>
    <input id="enter" type="submit" onclick="getRes4()">
    </div>
        `
                console.log("intenta de nuevo 4")
            }
        }

        function getRes5() {

            res5 = document.getElementById("formi").value;
            console.log(res5);
            if (res5 == 6) {
                console.log("correcto 5");
                mydiv.innerHTML = `
        <div class="second-content">
        <p> 2X2+2=6 ES CORRECTO</p>

        <h1 id = "inf" > Excelente lograste responder las 5 </h1>
        <img src="/img/felicidades-congratulations.gif" alt="">
        <input id="btn-2" value="EMPEZAR EL TEST DE NUEVO" type="submit" onclick="getResultado()">
        </div>
        `;

            } else {
                mydiv.innerHTML = `
        <div class="second-content">
        <p>2X2+2=9 ES INCORRECTO, PORFAVOR INTENTA DE NUEVO HASTA LOGRARLO</p>
        <h1 id = "inf" > ¿Cuanto es 2x2 + 2? </h1>
        <select name="" id="formi">
            <option value="9" id="primeraOpcion">9</option>
            <option value="6" id="segundaOpcion">6</option>

        </select>
    <input id="enter" type="submit" onclick="getRes5()">
    </div>
        `
                console.log("intenta de nuevo 5")
            }
        }
    }
}