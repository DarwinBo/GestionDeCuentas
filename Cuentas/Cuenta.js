export class Cuenta {
    #cliente;
    #saldo;


    constructor(cliente,numero, agencia, saldo){
        if(this.constructor == Cuenta){
            throw new Error(`No se debe instanciar objetos de la clase cuenta`);
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente (valor){
        if (valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    despositoEnCuenta(valor){
        if (valor > 0){
            this.#saldo += valor;
            return this.#saldo;
        }else{
            console.warn("Ingrese cantidad correcta")
        }
        
    }

    retirandoDeCuenta (valor){
        throw new Error(`Debe implementar el metodo retirar de cuenta en su clase`);  
    }

        _retirandoDeCuenta (valor, comision){
        valor = valor * (1+comision/100)
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }else{
            console.warn("No tiene saldo suficiente para realizar esta operación")
        }
        
    }

    verSaldo(){
        return this.#saldo
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirandoDeCuenta(valor);
        cuentaDestino.despositoEnCuenta(valor);
    }

 
}