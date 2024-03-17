class divergencia {
    constructor({
        primera,
        segunda,
        tercera
    }){
        this.primera = document.getElementById("primera");
        this.segunda = segunda.getElementById("segunda");
        this.tercera = tercera.getElementById("tercera");
    }
static get listaCoordenas(){
    return ["COORDENADAD CARTESIANAS","COORDENADAS CILINDRICAS","COORDENADAS ESFERICAS"]
}
static coordenadasAceptadas(){
    return console.info(`las coordenas aceptadas son "${divergencia.listaCoordenas.join(" , ")}"`);
}

}