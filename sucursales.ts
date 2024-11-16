import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";

export class RedDeVeterinarias {
    public veterinarias: Veterinaria[] = [];
    public clientes: Clientes[] = [];
    public pacientes: Paciente[] = [];

    agregarVeterinaria(veterinaria: Veterinaria): void {//recibe un objeto veterinaria como parametro 
        this.veterinarias.push(veterinaria);// lo agrega al arreglo veterinaria 
        console.log(`Veterinaria "${veterinaria.nombre}" agregada a la red.`); // se imprime un mesaje de confirmacion 
    }

    listarVeterinarias(): void {// muestra por cosola la lista de veterinarias alamacenadas 
        console.log("\nNº ORDEN || NOMBRE VETERINARIA || DIRECCIÓN");
        this.veterinarias.forEach((veterinaria, index) => {
            console.log(`${index + 1}. ${veterinaria.nombre} - ${veterinaria.direccion}`);
        });
    }

    modificarVeterinaria(index: number, nuevoNombre: string, nuevaDireccion: string): void {// modifica los datos de una veterinaria seleccionada por el index
        if (index >= 0 && index < this.veterinarias.length) {// se valida que el index sea valido antes de realizar cambios
            const vet = this.veterinarias[index];
            vet.nombre = nuevoNombre;
            vet.direccion = nuevaDireccion;
            console.log(`Veterinaria "${vet.nombre}" modificada correctamente.`);// se actualiza el nombre y direccion
        } else {
            console.log("Índice inválido.");
        }
    }

    eliminarVeterinaria(index: number): void {// elimina una veterinaria del arreglo por su indice
        if (index >= 0 && index < this.veterinarias.length) {
            const vet = this.veterinarias.splice(index, 1)[0];// se usa splice para remover el elemento y mostrarlo en un mesanje de confiamcion
            console.log(`Veterinaria "${vet.nombre}" eliminada correctamente.`);
        } else {
            console.log("Índice inválido.");
        }// el metodo slice se utiliza para modificar un arreglo, ya sea eliminar o reemplazar
    }

    agregarCliente(cliente: Clientes): void {// agrega un cliente
        this.clientes.push(cliente);
        console.log(`Cliente "${cliente.nombre}" agregado correctamente.`);
    }

    listarClientes(): void {// lista a los clientes almacenados 
        console.log("\nNº ORDEN || NOMBRE CLIENTE || ID || VIP");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nombre} - ${cliente._ID} - VIP: ${cliente.vip}`);
        });
    }

    modificarCliente(index: number, nuevoNombre: string, nuevaDireccion: string): void {// modifica un cliente 
        if (index >= 0 && index < this.clientes.length) {
            const cliente = this.clientes[index];
            cliente.nombre = nuevoNombre;
            cliente.direccion = nuevaDireccion;
            console.log(`Cliente "${cliente.nombre}" modificado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    eliminarCliente(index: number): void {// elimina un cliente
        if (index >= 0 && index < this.clientes.length) {
            const cliente = this.clientes.splice(index, 1)[0];
            console.log(`Cliente "${cliente.nombre}" eliminado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    agregarPaciente(paciente: Paciente): void {// agrega un paciente al nuevo arreglo
        this.pacientes.push(paciente);
        console.log(`Paciente "${paciente.nombre}" de tipo ${paciente.especie} agregado correctamente.`);
    }

    listarPacientes(): void {// lista a los pacientes almacenados
        console.log("\nNº ORDEN || NOMBRE PACIENTE || ID DUEÑO || ESPECIE");
        this.pacientes.forEach((paciente, index) => {
            console.log(`${index + 1}. ${paciente.nombre} - ID Dueño: ${paciente.id} - Especie: ${paciente.especie}`);
        });
    }
}
