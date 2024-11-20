import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Provedores";

export class RedDeVeterinarias {
    public veterinarias: Veterinaria[] = [];
    public clientes: Clientes[] = [];
    public pacientes: Paciente[] = [];
    public proveedores: Proveedor[] = []; // Nuevo arreglo para proveedores

    // Gestión de veterinarias
    agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
        console.log(`Veterinaria "${veterinaria.nombre}" agregada a la red.`);
    }

    listarVeterinarias(): void {
        console.log("\nNº ORDEN || NOMBRE VETERINARIA || DIRECCIÓN");
        this.veterinarias.forEach((veterinaria, index) => {
            console.log(`${index + 1}. ${veterinaria.nombre} - ${veterinaria.direccion}`);
        });
    }

    modificarVeterinaria(index: number, nuevoNombre: string, nuevaDireccion: string): void {
        if (index >= 0 && index < this.veterinarias.length) {
            const vet = this.veterinarias[index];
            vet.nombre = nuevoNombre;
            vet.direccion = nuevaDireccion;
            console.log(`Veterinaria "${vet.nombre}" modificada correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    eliminarVeterinaria(index: number): void {
        if (index >= 0 && index < this.veterinarias.length) {
            const vet = this.veterinarias.splice(index, 1)[0];
            console.log(`Veterinaria "${vet.nombre}" eliminada correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    // Gestión de clientes
    agregarCliente(cliente: Clientes): void {
        this.clientes.push(cliente);
        console.log(`Cliente "${cliente.nombre}" agregado correctamente.`);
    }

    listarClientes(): void {
        console.log("\nNº ORDEN || NOMBRE CLIENTE || ID || VIP");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nombre} - ${cliente._ID} - VIP: ${cliente.vip}`);
        });
    }

    modificarCliente(index: number, nuevoNombre: string, nuevaDireccion: string): void {
        if (index >= 0 && index < this.clientes.length) {
            const cliente = this.clientes[index];
            cliente.nombre = nuevoNombre;
            cliente.direccion = nuevaDireccion;
            console.log(`Cliente "${cliente.nombre}" modificado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    eliminarCliente(index: number): void {
        if (index >= 0 && index < this.clientes.length) {
            const cliente = this.clientes.splice(index, 1)[0];
            console.log(`Cliente "${cliente.nombre}" eliminado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    // Gestión de pacientes
    agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(`Paciente "${paciente.nombre}" de tipo ${paciente.especie} agregado correctamente.`);
    }

    listarPacientes(): void {
        console.log("\nNº ORDEN || NOMBRE PACIENTE || ID DUEÑO || ESPECIE");
        this.pacientes.forEach((paciente, index) => {
            console.log(`${index + 1}. ${paciente.nombre} - ID Dueño: ${paciente.id} - Especie: ${paciente.especie}`);
        });
    }

    // Gestión de proveedores
    agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log(`Proveedor "${proveedor.getNombre()}" agregado correctamente.`);
    }

    listarProveedores(): void {
        console.log("\nNº ORDEN || NOMBRE PROVEEDOR || DIRECCIÓN || TELÉFONO || ACTIVO");
        this.proveedores.forEach((proveedor, index) => {
            console.log(
                `${index + 1}. ${proveedor.getNombre()} - ${proveedor.getDireccion()} - ${proveedor.getTelefono()} - Activo: ${proveedor.isActivo()}`
            );
        });
    }

    modificarProveedor(index: number, nuevoNombre?: string, nuevaDireccion?: string, nuevoTelefono?: string): void {
        if (index >= 0 && index < this.proveedores.length) {
            const proveedor = this.proveedores[index];
            if (!proveedor.isActivo()) {
                console.log("El proveedor seleccionado está inactivo y no puede ser modificado.");
                return;
            }

            if (nuevoNombre) proveedor.actualizarNombre(nuevoNombre);
            if (nuevaDireccion) proveedor.actualizarDireccion(nuevaDireccion);
            if (nuevoTelefono) proveedor.actualizarTelefono(nuevoTelefono);

            console.log(`Proveedor "${proveedor.getNombre()}" modificado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    darDeBajaProveedor(index: number): void {
        if (index >= 0 && index < this.proveedores.length) {
            const proveedor = this.proveedores[index];
            proveedor.darDeBaja();
            console.log(`Proveedor "${proveedor.getNombre()}" dado de baja correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}
