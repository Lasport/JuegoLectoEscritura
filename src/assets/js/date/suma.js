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