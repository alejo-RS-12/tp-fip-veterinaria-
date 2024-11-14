import { RedDeVeterinarias } from "./sucursales";
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";


let redDeVeterinarias1 = new RedDeVeterinarias();

let veterinaria1 = new Veterinaria("La Huella", "Leal 2500");
let veterinaria2 = new Veterinaria("Patitas", "Hornos 7888");
let veterinaria3 = new Veterinaria("Peludos", "Pringles 5100");

redDeVeterinarias1.agregarVeterinaria(veterinaria1);
redDeVeterinarias1.agregarVeterinaria(veterinaria2);
redDeVeterinarias1.agregarVeterinaria(veterinaria3);

// console.log(redDeVeterinarias1);

redDeVeterinarias1.listarVeterinarias()

let cliente1 = new Clientes(15525251, 0,  "Juan Sanchez", "Torres 1545", false);
let cliente2 = new Clientes(15501552, 5,  "Ramon Fernandez", "Estrada 5015", true);

redDeVeterinarias1.agregarCliente(cliente1);
redDeVeterinarias1.agregarCliente(cliente2);

redDeVeterinarias1.listarClientes();

let paciente1 = new Paciente("Pipo", "", 52211);
let paciente2 = new Paciente("Lulita", "perro", 12234);
let paciente3 = new Paciente("Sandro", "gato", 12234);

redDeVeterinarias1.agregarPaciente(paciente1);
redDeVeterinarias1.agregarPaciente(paciente2);
redDeVeterinarias1.agregarPaciente(paciente3);

redDeVeterinarias1.listarPacientes();

redDeVeterinarias1.eliminarPaciente(30634);

