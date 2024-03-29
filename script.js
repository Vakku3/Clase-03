var losDigimon; 
var elArreglo; 
var laPosicion; 
var elColor;

function preload() {
    losDigimon = loadJSON("https://digimon-api.vercel.app/api/digimon");
}
//math.floor es mejor y math.round. math.floor corta los decimales, mientras que math.round
function setup() {
    //transformo el objeto en un arreglo
    elArreglo = Object.values(losDigimon);
    laPosicion = Math.round(random(0,elArreglo.length));
    console.log(laPosicion);
    createElement("h1", "Dibuja a <a href='"+ elArreglo[laPosicion].img +"' target='_blank'>" + elArreglo[laPosicion].name + "</a>").parent("instruccion");
    //selecciono el elemento con esta identidad
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
    //selecciono el elemento con esta identidad    
    var gomita = select("#borra");
    gomita.mousePressed(borrador);
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#efebe9");
    elColor = createColorPicker("#000000").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_digimon", "jpg");
}

function borrador() {
    background("#eceff1");
}