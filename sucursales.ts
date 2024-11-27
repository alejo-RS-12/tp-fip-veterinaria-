// Importaciones de clases necesarias para la gestión de la red de veterinarias
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedores";

// Clase principal que administra una red de veterinarias, clientes, pacientes y proveedores
export class RedDeVeterinarias {
    // Arreglo que almacena las veterinarias registradas en la red
    public veterinarias: Veterinaria[] = [];
    // Arreglo que almacena los clientes registrados
    public clientes: Clientes[] = [];
    // Arreglo que almacena los pacientes de las veterinarias
    public pacientes: Paciente[] = [];
    // Arreglo que almacena los proveedores de servicios o productos
    public proveedores: Proveedor[] = []; // Nuevo arreglo para proveedores

    // *** Gestión de veterinarias ***

    // Método para agregar una nueva veterinaria a la red
    agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
        console.log(`Veterinaria "${veterinaria.nombre}" agregada a la red.`);
    }

    // Método para listar todas las veterinarias de la red
    listarVeterinarias(): void {
        console.log("\nNº ORDEN || NOMBRE VETERINARIA || DIRECCIÓN");
        this.veterinarias.forEach((veterinaria, index) => {
            console.log(`${index + 1}. ${veterinaria.nombre} - ${veterinaria.direccion}`);
        });
    }

    // Método para modificar los datos de una veterinaria existente
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

    // Método para eliminar una veterinaria de la red
    eliminarVeterinaria(index: number): void {
        if (index >= 0 && index < this.veterinarias.length) {
            const vet = this.veterinarias.splice(index, 1)[0];
            console.log(`Veterinaria "${vet.nombre}" eliminada correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    // *** Gestión de clientes ***

    // Método para agregar un nuevo cliente
    agregarCliente(cliente: Clientes): void {
        this.clientes.push(cliente);
        console.log(`Cliente "${cliente.nombre}" agregado correctamente.`);
    }

    // Método para listar todos los clientes registrados
    listarClientes(): void {
        console.log("\nNº ORDEN || NOMBRE CLIENTE || ID || VIP");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nombre} - ${cliente._ID} - VIP: ${cliente.vip}`);
        });
    }

    // Método para modificar los datos de un cliente existente
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

    // Método para eliminar un cliente de la lista
    eliminarCliente(index: number): void {
        if (index >= 0 && index < this.clientes.length) {
            const cliente = this.clientes.splice(index, 1)[0];
            console.log(`Cliente "${cliente.nombre}" eliminado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

   // *** Gestión de pacientes ***

    // Método para agregar un nuevo paciente
    agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(`Paciente "${paciente.nombre}" de tipo ${paciente.especie} agregado correctamente.`);
    }

    // Método para listar todos los pacientes registrados
    listarPacientes(): void {
        console.log("\nNº ORDEN || NOMBRE PACIENTE || ID DUEÑO || ESPECIE");
        this.pacientes.forEach((paciente, index) => {
            console.log(`${index + 1}. ${paciente.nombre} - ID Dueño: ${paciente.id} - Especie: ${paciente.especie}`);
        });
    }

    // Método para modificar los datos de un cliente existente
    modificarPaciente(index: number, nuevoNombre: string, nuevaEspecie: string): void {
        if (index >= 0 && index < this.pacientes.length) {
            const paciente = this.pacientes[index];
            paciente.nombre = nuevoNombre;
            paciente.especie = nuevaEspecie;
            console.log(`Paciente "${paciente.nombre}" modificado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    // Método para eliminar un cliente de la lista
    eliminarPaciente(index: number): void {
        if (index >= 0 && index < this.pacientes.length) {
            const paciente = this.pacientes.splice(index, 1)[0];
            console.log(`Paciente "${paciente.nombre}" eliminado correctamente.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    // *** Gestión de proveedores ***

    // Método para agregar un nuevo proveedor
    agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log(`Proveedor "${proveedor.getNombre()}" agregado correctamente.`);
    }

    // Método para listar todos los proveedores registrados
    listarProveedores(): void {
        console.log("\nNº ORDEN || NOMBRE PROVEEDOR || DIRECCIÓN || TELÉFONO");
        this.proveedores.forEach((proveedor, index) => {
            if (proveedor.isActivo()) {
                console.log(
                    `${index + 1}. ${proveedor.getNombre()} - ${proveedor.getDireccion()} - ${proveedor.getTelefono()}`
                );
            }
        });
    }
    // Método para modificar los datos de un proveedor existente
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

    // Método para dar de baja a un proveedor (marcarlo como inactivo)
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
