import { Cuenta } from "./Cuenta.js";

export class cuentaAhorro extends Cuenta{

    constructor(cliente,numero,agencia,saldo){
        super(cliente,numero,agencia,saldo);  
    }
   
    retirandoDeCuenta (valor){
        super._retirandoDeCuenta(valor,2);
        }
}
