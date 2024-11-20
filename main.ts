import * as readline from "readline";
import { RedDeVeterinarias } from "./sucursales";
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedores";

// Se instancia la red principal de veterinarias, que contiene toda la información.
const red = new RedDeVeterinarias();

// Configuración de la interfaz de entrada/salida para interactuar con el usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función que permite hacer preguntas al usuario y manejar la respuesta como una promesa.
const preguntar = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};

// Función principal que controla el menú del sistema.
const iniciar = async () => {
    console.log("¡Bienvenido al sistema de gestión de veterinarias!\n");

    let continuar = true; // Controla si el programa sigue corriendo.

    // Bucle principal del programa.
    while (continuar) {
        console.log("\n¿Qué desea hacer?");
        console.log("1. Agregar una nueva veterinaria");
        console.log("2. Agregar un nuevo cliente");
        console.log("3. Agregar un nuevo paciente");
        console.log("4. Listar veterinarias");
        console.log("5. Listar clientes");
        console.log("6. Listar pacientes");
        console.log("7. Modificar veterinaria");
        console.log("8. Eliminar veterinaria");
        console.log("9. Modificar cliente");
        console.log("10. Eliminar cliente");
        console.log("11. Gestionar proveedores");
        console.log("12. Salir");

        // Captura la opción del usuario.
        const opcion = await preguntar("\nIngrese una opción: ");

        // Evalúa la opción seleccionada.
        switch (opcion) {
            case "1": // Agregar una nueva veterinaria.
                const nombreVet = await preguntar("Ingrese el nombre de la veterinaria: ");
                const direccionVet = await preguntar("Ingrese la dirección de la veterinaria: ");
                red.agregarVeterinaria(new Veterinaria(nombreVet, direccionVet));
                break;

            case "2": // Agregar un nuevo cliente.
                const nombreCliente = await preguntar("Ingrese el nombre del cliente: ");
                const direccionCliente = await preguntar("Ingrese la dirección del cliente: ");
                const telefonoCliente = parseInt(await preguntar("Ingrese el teléfono del cliente: "), 10);
                red.agregarCliente(new Clientes(telefonoCliente, 0, nombreCliente, direccionCliente, false));
                break;

            case "3": // Agregar un nuevo paciente.
                red.listarClientes(); // Lista a los clientes existentes.
                const clienteIndex = parseInt(await preguntar("Seleccione el número del cliente (dueño): "), 10) - 1;

                if (clienteIndex >= 0 && clienteIndex < red.clientes.length) { // Verifica que el índice sea válido.
                    const cliente = red.clientes[clienteIndex];
                    const nombreMascota = await preguntar("Ingrese el nombre de la mascota: ");
                    const especieMascota = await preguntar("Ingrese la especie de la mascota: ");
                    red.agregarPaciente(new Paciente(nombreMascota, especieMascota, cliente._ID)); // Asocia al cliente con la mascota.
                } else {
                    console.log("Índice de cliente inválido.");
                }
                break;

            case "4": // Listar todas las veterinarias.
                red.listarVeterinarias();
                break;

            case "5": // Listar todos los clientes.
                red.listarClientes();
                break;

            case "6": // Listar todos los pacientes.
                red.listarPacientes();
                break;

            case "7": // Modificar información de una veterinaria.
                red.listarVeterinarias(); // Lista las veterinarias existentes.
                const vetIndex = parseInt(await preguntar("Seleccione el número de la veterinaria a modificar: "), 10) - 1;
                const nuevoNombreVet = await preguntar("Ingrese el nuevo nombre de la veterinaria: ");
                const nuevaDireccionVet = await preguntar("Ingrese la nueva dirección de la veterinaria: ");
                red.modificarVeterinaria(vetIndex, nuevoNombreVet, nuevaDireccionVet);
                break;

            case "8": // Eliminar una veterinaria.
                red.listarVeterinarias(); // Lista las veterinarias existentes.
                const eliminarVetIndex = parseInt(await preguntar("Seleccione el número de la veterinaria a eliminar: "), 10) - 1;
                red.eliminarVeterinaria(eliminarVetIndex);
                break;

            case "9": // Modificar información de un cliente.
                red.listarClientes(); // Lista los clientes existentes.
                const clienteModIndex = parseInt(await preguntar("Seleccione el número del cliente a modificar: "), 10) - 1;
                const nuevoNombreCliente = await preguntar("Ingrese el nuevo nombre del cliente: ");
                const nuevaDireccionCliente = await preguntar("Ingrese la nueva dirección del cliente: ");
                red.modificarCliente(clienteModIndex, nuevoNombreCliente, nuevaDireccionCliente);
                break;

            case "10": // Eliminar un cliente.
                red.listarClientes(); // Lista los clientes existentes.
                const eliminarClienteIndex = parseInt(await preguntar("Seleccione el número del cliente a eliminar: "), 10) - 1;
                red.eliminarCliente(eliminarClienteIndex);
                break;

            case "11": // Gestionar proveedores.
                await gestionarProveedores(); // Llama al submenú de proveedores.
                break;

            case "12": // Salir del sistema.
                console.log("¡Gracias por usar el sistema!");
                continuar = false; // Finaliza el bucle.
                break;

            default: // Manejo de entradas no válidas.
                console.log("Opción no válida. Intente nuevamente.");
        }
    }

    rl.close(); // Cierra la interfaz de entrada/salida.
};

// Submenú para gestionar proveedores.
const gestionarProveedores = async () => {
    let continuar = true;

    while (continuar) {
        console.log("\nGestión de Proveedores:");
        console.log("1. Agregar proveedor");
        console.log("2. Listar proveedores");
        console.log("3. Modificar proveedor");
        console.log("4. Dar de baja a un proveedor");
        console.log("5. Volver al menú principal");

        const opcion = await preguntar("Seleccione una opción: ");

        switch (opcion) {
            case "1": // Agregar un proveedor.
                const nombreProveedor = await preguntar("Ingrese el nombre del proveedor: ");
                const direccionProveedor = await preguntar("Ingrese la dirección del proveedor: ");
                const telefonoProveedor = await preguntar("Ingrese el teléfono del proveedor: ");
                red.agregarProveedor(new Proveedor(nombreProveedor, direccionProveedor, telefonoProveedor));
                break;

            case "2": // Listar proveedores.
                red.listarProveedores();
                break;

            case "3": // Modificar un proveedor.
                red.listarProveedores();
                const proveedorModIndex = parseInt(await preguntar("Seleccione el número del proveedor a modificar: "), 10) - 1;
                const nuevoNombreProv = await preguntar("Ingrese el nuevo nombre del proveedor: ");
                const nuevaDireccionProv = await preguntar("Ingrese la nueva dirección del proveedor: ");
                const nuevoTelefonoProv = await preguntar("Ingrese el nuevo teléfono del proveedor: ");
                red.modificarProveedor(proveedorModIndex, nuevoNombreProv, nuevaDireccionProv, nuevoTelefonoProv);
                break;

            case "4": // Dar de baja a un proveedor.
                red.listarProveedores();
                const proveedorBajaIndex = parseInt(await preguntar("Seleccione el número del proveedor a dar de baja: "), 10) - 1;
                red.darDeBajaProveedor(proveedorBajaIndex);
                break;

            case "5": // Volver al menú principal.
                continuar = false;
                break;

            default: // Manejo de entradas no válidas.
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
};

// Inicia la ejecución del programa.
iniciar();
