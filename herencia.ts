class Operacion {
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor() {
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }

    
    public set ValorA(value : number) {
        this.valorA = value;
    }

    public set ValorB(value : number) {
        this.valorB = value;
    }

    
    get Resultado() : number {
        return this.resultado;
    }   
}

class Suma extends Operacion {
    Sumar() {
        this.resultado = this.ValorA + this.ValorB;
    }
}

class Resta extends Operacion {
    Restar() {
        this.resultado = this.ValorA - this.ValorB;
    }
}

let OperacionS = new Suma();
OperacionS.ValorA=45;
OperacionS.ValorB=10;
OperacionS.Sumar();
console.log("El resultado de la suma es " + OperacionS.Resultado);

let OperacionR = new Resta();
OperacionR.ValorA=45;
OperacionR.ValorB=10;
OperacionR.Restar();
console.log("El resultado de la suma es " + OperacionR.Resultado);