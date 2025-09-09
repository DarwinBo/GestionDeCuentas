
import{Cliente} from './Cliente.js'
import{CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { cuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const cliente = new Cliente('Darwin Bello', '0217314', 'V0217314');
const cliente2 = new Cliente('Diana Bello','10123589','V10123589');

//Empleados
const empleado = new Empleado('Fabian Ramirez', '1235135', 5000)
empleado.asignarClave('6671');
const gerente = new Gerente('David Bello', '1012391586', 15000) 
const director = new Director('Diego Bello', '101354684', 18000) 
console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

//Sistemas de Autenticación
console.log(SistemaAutenticacion.login(empleado,'6671'));


//Cuentas

const cuentaDeDarwin = new CuentaCorriente(cliente,'1','001',100);
const cuentaDeDiana = new CuentaCorriente(cliente2,'2','002',100);

const cuentaAhorroDarwin = new cuentaAhorro(Cliente,'9985','001',100);
console.log(cuentaAhorroDarwin);

const CuentaNominaDarwin = new CuentaNomina(Cliente,'9854','001',100 );
CuentaNominaDarwin.despositoEnCuenta(150);
console.log(CuentaNominaDarwin.verSaldo());

CuentaNominaDarwin.retirandoDeCuenta(50);
console.log(CuentaNominaDarwin.verSaldo());










