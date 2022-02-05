let option=document.getElementById("option"),
    workg=document.getElementById("work-g"),
    texto=document.getElementById("texto");

var letters = new Array(
    {img:'<img src="./../../../assets/letters/a.png" width="120" height="120">',id:"a"},
    {img:'<img src="./../../../assets/letters/e.png" width="120" height="120">',id:"e"},
    {img:'<img src="./../../../assets/letters/v.png" width="120" height="120">',id:"v"},
    {img:'<img src="./../../../assets/letters/p.png" width="120" height="120">',id:"p"},
    {img:'<img src="./../../../assets/letters/n.png" width="120" height="120">',id:"n"},
    {img:'<img src="./../../../assets/letters/o.png" width="120" height="120">',id:"o"},
    {img:'<img src="./../../../assets/letters/s.png" width="120" height="120">',id:"s"},
    {img:'<img src="./../../../assets/letters/u.png" width="120" height="120">',id:"u"},
    {img:'<img src="./../../../assets/letters/l.png" width="120" height="120">',id:"l"},
    {img:'<img src="./../../../assets/letters/z.png" width="120" height="120">',id:"z"},
    {img:'<img src="./../../../assets/letters/j.png" width="120" height="120">',id:"j"}
);
//cargar las letras
var game = new Array();
var escribirP = new Array();
var escribirI = new Array();

var works = new Array (
    {w:"pan", img:'<img src="./../../../assets/writing/pan.png" width="200" height="150">'},
    {w:"ave", img:'<img src="./../../../assets/writing/ave.png" width="200" height="150">'},
    {w:"oso", img:'<img src="./../../../assets/writing/oso.png" width="150" height="150">'},
    {w:"ojo", img:'<img src="./../../../assets/writing/ojo.png" width="150" height="150">'},
    {w:"uva", img:'<img src="./../../../assets/writing/uva.png" width="150" height="150">'},
    {w:"sol", img:'<img src="./../../../assets/writing/sol.png" width="150" height="150">'},
    {w:"pez", img:'<img src="./../../../assets/writing/pez.png" width="150" height="150">'}
);

cargaletters()
function cargaletters() {
    let abc = [];
    for(i=0;i<11;i++){
        abc.push(`<button type="button" class="btn" onclick="selec(${i})">`+letters[i].img+`</button>`);
    }
    abc.sort(function() {return Math.random() - 0.5});
    option.innerHTML = abc;
}

cargaimagen()
function cargaimagen() {
    var i = Math.round(Math.random()*6);    
    var imagen = document.getElementById("imagen");
    imagen.innerHTML=works[i].img;
    letra=works[i].w;
/* 
    var imagen = document.getElementById("imagen");
    imagen.innerHTML=works[1].img;
    letra = works[1].w;*/
}

var caja1=document.getElementById("caja1"),
    caja2=document.getElementById("caja2"),
    resul=document.getElementById("resultado");
contador=0;
function selec(r) {

            r=r;
            escribirP+=letters[r].id;
            escribirI+=letters[r].img;
            caja1.innerHTML=(escribirI+`<br>`+escribirP);
            contador=1;
    
    resul.innerHTML = `<button type="button" class="btn btn-info" onclick="validacion()">Enviar</button>`;
}


function validacion(){

    if (escribirP !== "" ) {

        if(escribirP==letra){
            caja2.innerHTML="MUY BIEN <br> Ahora como se escribe:";
            resul.innerHTML = `<button type="button" class="btn btn-info" onclick="validacion()">Siguiete</button>`
            escribirP = [];
            escribirI = [];
            caja1.innerHTML="";
            cargaimagen()
        }else if(escribirP !==letra){
            caja2.innerHTML="NO ES CORRECTO VUELVE INTENTARLO";
            resul.innerHTML = `<button type="button" class="btn btn-info" onclick="validacion()">Enviar</button>`
            escribirP = [];
            escribirI = [];
            caja1.innerHTML="";
        }
    }
}
