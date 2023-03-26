class Turbina {
    private numTurbinas=0;
    constructor(n:number) {
        this.numTurbinas=n;
    }
    public ToString(){
        return this.numTurbinas+"Turbina/s"
    }
}

class Helice {
    private numHelices:number=0;
    constructor(n:number) {
        this.numHelices=n;
    }
    public ToString(){
        return this.numHelices+ " helice/s";
    }
}

class TrenDeAterrizaje {
    private numTrenDeAterrizaje:number=0;
    constructor(n:number) {
        this.numTrenDeAterrizaje=n;
    }
    public ToString(){
        return this.numTrenDeAterrizaje+" tren de aterrizaje"
    }
}

class Alas {
    private numAlas:number=0;
    constructor(n:number) {
        this.numAlas=n;
    }
    public ToString(){
        return this.numAlas+" alas";
    }
}

class Cubierta {
    private cabinaTripulacion:boolean=false;
    private cabinaVuelo:boolean=false;
    private sistemaEmergencia:boolean=false;
    private numTanquesCombustible:number=0;
    private numPuertasSalida:number=0;

    public constructor(pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number) {
        this.cabinaTripulacion=pCabinaTripulacion;
        this.cabinaVuelo=pCabinaVuelo;
        this.sistemaEmergencia=pSistemaEmergencia;
        this.numTanquesCombustible=pTanquesCombustible;
        this.numPuertasSalida=pPuertasSalida;
    }

    public ToString(){
        let mensaje = "cubierta compuesta de: ";
        if(this.cabinaVuelo){
            mensaje +=" cubierta de vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje +=" cubierta de tripulacion, ";
        }
        if (this.sistemaEmergencia) {
            mensaje +=" sistema de emergencia, "
        }
        mensaje += this.numTanquesCombustible + " tanques de combustible, ";
        mensaje += this.numPuertasSalida + " puertas de salida.";
        return mensaje;
    }
    
}

class Aeroplano {

    private helice:Helice;
    private trenAterrizaje:TrenDeAterrizaje;
    //private alas:Alas;
    private cubierta:Cubierta;

    constructor(phelice:Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:AnimationPlayState, pCubierta:Cubierta) {
        this.helice=phelice;
        this.trenAterrizaje=pTrenAterrizaje;
        // this.alas=pAlas;
        this.cubierta=pCubierta;
    }

    public ToString(){
        let mensaje ="Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
     //   mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}