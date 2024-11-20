import * as readline from "readline";
import { RedDeVeterinarias } from "./sucursales";
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Provedores";

const red = new RedDeVeterinarias();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const preguntar = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};

const iniciar = async () => {
    console.log("¡Bienvenido al sistema de gestión de veterinarias!\n");

    let continuar = true;

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
        console.log("11. Salir");
        console.log("12. Agregar un nuevo proveedor");
        console.log("13. Editar un proveedor");
        console.log("14. Dar de baja un proveedor");
        console.log("15. Listar proveedores");

        const opcion = await preguntar("\nIngrese una opción: ");

        switch (opcion) {
            // Veterinarias
            case "1":
                const nombreVet = await preguntar("Ingrese el nombre de la veterinaria: ");
                const direccionVet = await preguntar("Ingrese la dirección de la veterinaria: ");
                red.agregarVeterinaria(new Veterinaria(nombreVet, direccionVet));
                break;

            case "2":
                const nombreCliente = await preguntar("Ingrese el nombre del cliente: ");
                const direccionCliente = await preguntar("Ingrese la dirección del cliente: ");
                const telefonoCliente = parseInt(await preguntar("Ingrese el teléfono del cliente: "), 10);
                red.agregarCliente(new Clientes(telefonoCliente, 0, nombreCliente, direccionCliente, false));
                break;

            case "12": // Proveedor
                const nombreProveedor = await preguntar("Ingrese el nombre del proveedor: ");
                const direccionProveedor = await preguntar("Ingrese la dirección del proveedor: ");
                const telefonoProveedor = await preguntar("Ingrese el teléfono del proveedor: ");
                red.agregarProveedor(new Proveedor(nombreProveedor, direccionProveedor, telefonoProveedor));
                break;

            case "15":
                red.listarProveedores();
                break;

            case "11":
                console.log("¡Gracias por usar el sistema!");
                continuar = false;
                break;

            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }

    rl.close();
};

iniciar();
