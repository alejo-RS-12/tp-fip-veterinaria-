import * as readline from "readline";
import { RedDeVeterinarias } from "./sucursales";
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedores";
import { IDgenerador } from "./generadorID";

// Configuración de la red de veterinarias.
const red = new RedDeVeterinarias();
// carga de datos iniciales
const cargarDatosIniciales = () => {
    // Veterinarias precargadas.
    red.agregarVeterinaria(new Veterinaria("Veterinaria Central", "Av. Principal 123"));
    red.agregarVeterinaria(new Veterinaria("PetCare", "Calle Secundaria 45"));
// Precargar Clientes y Pacientes con el mismo ID.
    const idCliente1 = IDgenerador.generateUnicoId();
    const idCliente2 = IDgenerador.generateUnicoId();

    red.agregarCliente(new Clientes(123456789, 1, "Juan Pérez", "Calle A 10", false, idCliente1));
    red.agregarCliente(new Clientes(987654321, 2, "María López", "Calle B 20", true, idCliente2));

    red.agregarPaciente(new Paciente("Firulais", "canino", idCliente1)); // Asociar con el cliente por ID.
    red.agregarPaciente(new Paciente("Michi", "felino", idCliente2));

    // Proveedores precargados.
    red.agregarProveedor(new Proveedor("Proveedor A", "Zona Industrial 8", "456123789"));
    red.agregarProveedor(new Proveedor("Proveedor B", "Zona Comercial 15", "789456123"));
};

// Configuración de la interfaz de entrada/salida.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función para manejar preguntas.
const preguntar = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};

// Función principal.
const iniciar = async () => {
    
    cargarDatosIniciales();// se muestran los datos precargados

    console.log("\n¡Bienvenido al sistema de gestión de veterinarias!\n");

    let continuar = true;

    while (continuar) {
        console.log("\n¿Qué desea hacer?");
        console.log("1. Gestionar Veterinarias");
        console.log("2. Gestionar Clientes");
        console.log("3. Gestionar Pacientes");
        console.log("4. Gestionar Proveedores");
        console.log("5. Salir");

        const opcion = await preguntar("Seleccione una opción: ");
        switch (opcion) {
            case "1":
                await gestionarVeterinarias();
                break;
            case "2":
                await gestionarClientes();
                break;
            case "3":
                await gestionarPacientes();
                break;
            case "4":
                await gestionarProveedores();
                break;
            case "5":
                continuar = false;
                console.log("¡Gracias por darnos si tiempo!");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }

    rl.close();
};

// Submenú para gestionar veterinarias.
const gestionarVeterinarias = async () => {
    let continuar = true;

    while (continuar) {
        console.log("\nGestión de Veterinarias:");
        console.log("1. Agregar");
        console.log("2. Listar");
        console.log("3. Modificar");
        console.log("4. Eliminar");
        console.log("5. Volver al menú principal");

        const opcion = await preguntar("Seleccione una opción: ");
        switch (opcion) {
            case "1":
                const nombre = await preguntar("Nombre: ");
                const direccion = await preguntar("Dirección: ");
                red.agregarVeterinaria(new Veterinaria(nombre, direccion));
                console.log("Veterinaria agregada exitosamente.");
                break;
            case "2":
                red.listarVeterinarias();
                break;
            case "3":
                red.listarVeterinarias();
                const indexModificar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                const nuevoNombre = await preguntar("Nuevo nombre: ");
                const nuevaDireccion = await preguntar("Nueva dirección: ");
                red.modificarVeterinaria(indexModificar, nuevoNombre, nuevaDireccion);
                console.log("Veterinaria modificada.");
                break;
            case "4":
                red.listarVeterinarias();
                const indexEliminar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                red.eliminarVeterinaria(indexEliminar);
                console.log("Veterinaria eliminada.");
                break;
            case "5":
                continuar = false;
                break;
            default:
                console.log("Opción no válida.");
        }
    }
};

// Submenú para gestionar clientes.
const gestionarClientes = async () => {
    let continuar = true;

    while (continuar) {
        console.log("\nGestión de Clientes:");
        console.log("1. Agregar");
        console.log("2. Listar");
        console.log("3. Modificar");
        console.log("4. Eliminar");
        console.log("5. Volver al menú principal");

        const opcion = await preguntar("Seleccione una opción: ");
        switch (opcion) {
            case "1":
                const nombre = await preguntar("Nombre: ");
                const direccion = await preguntar("Dirección: ");
                const telefono = parseInt(await preguntar("Teléfono: "), 10);
                red.agregarCliente(new Clientes(telefono, 0, nombre, direccion, false));
                console.log("Cliente agregado.");
                break;
            case "2":
                red.listarClientes();
                break;
            case "3":
                red.listarClientes();
                const indexModificar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                const nuevoNombre = await preguntar("Nuevo nombre: ");
                const nuevaDireccion = await preguntar("Nueva dirección: ");
                red.modificarCliente(indexModificar, nuevoNombre, nuevaDireccion);
                console.log("Cliente modificado.");
                break;
            case "4":
                red.listarClientes();
                const indexEliminar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                red.eliminarCliente(indexEliminar);
                console.log("Cliente eliminado.");
                break;
            case "5":
                continuar = false;
                break;
            default:
                console.log("Opción no válida.");
        }
    }
};

// Submenús para pacientes
const gestionarPacientes = async () => {
    let continuar = true;

    while (continuar) {
        console.log("\nGestión de Pacientes:");
        console.log("1. agregar un paciente");
        console.log("2. Listar Pacientes");
        console.log("3. Modificar");
        console.log("4. Eliminar");
        console.log("5. Volver al menú principal");

        const opcion = await preguntar("Seleccione una opción: ");

        switch (opcion) {
            case "1": // Agregar un nuevo paciente.
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
                break;;

                case "2": // Listar todos los pacientes.
                red.listarPacientes();
                break;

                case "3":
                    red.listarPacientes();
                    const indexModificar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                    const nuevoNombre = await preguntar("Nuevo nombre: ");
                    const nuevaEspecie = await preguntar("Nueva especie: ");
                    red.modificarPaciente(indexModificar, nuevoNombre, nuevaEspecie);
                    console.log("Paciente modificado.");
                    break;
                case "4":
                    red.listarPacientes();
                    const indexEliminar = parseInt(await preguntar("Seleccione el índice: "), 10) - 1;
                    red.eliminarPaciente(indexEliminar);
                    console.log("Paciente eliminado.");
                    break;
                case "5": // Volver al menú principal.
                    continuar = false;
                    break;
            
            default: // Manejo de entradas no válidas.
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
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

// Iniciar el programa.
iniciar();
