import * as readline from "readline";// el readline permite la entrada del usuario por la terminal
import { RedDeVeterinarias } from "./sucursales";
import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";

const red = new RedDeVeterinarias();// se instancia la red veterinarias que sera la base de datos que gestiona las veterinarias, clientes y pacientes

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});// Se configura la interfaz de readline para leer entradas desde stdin y mostrar resultados en stdout

const preguntar = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};//Esta función permite formular preguntas al usuario y devolver sus respuestas como una promesa, facilitando el manejo asíncrono

const iniciar = async () => {// se implementa un buvle que ofrece opciones al usuario y ejecuta acciones
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

        const opcion = await preguntar("\nIngrese una opción: ");

        switch (opcion) {
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

            case "3":
                red.listarClientes();//Solicita al usuario que seleccione un cliente (dueño) basado en el índice
                const clienteIndex = parseInt(await preguntar("Seleccione el número del cliente (dueño): "), 10) - 1;

                if (clienteIndex >= 0 && clienteIndex < red.clientes.length) {//Verifica si el índice es válido
                    const cliente = red.clientes[clienteIndex];
                    const nombreMascota = await preguntar("Ingrese el nombre de la mascota: ");
                    const especieMascota = await preguntar("Ingrese la especie de la mascota: ");
                    red.agregarPaciente(new Paciente(nombreMascota, especieMascota, cliente._ID)); //Crea un nuevo paciente y lo asocia al cliente seleccionado
                } else {
                    console.log("Índice de cliente inválido.");
                }
                break;

            case "4":
                red.listarVeterinarias();
                break;

            case "5":
                red.listarClientes();
                break;

            case "6":
                red.listarPacientes();
                break;

            case "7":
                red.listarVeterinarias();
                const vetIndex = parseInt(await preguntar("Seleccione el número de la veterinaria a modificar: "), 10) - 1;
                const nuevoNombreVet = await preguntar("Ingrese el nuevo nombre de la veterinaria: ");
                const nuevaDireccionVet = await preguntar("Ingrese la nueva dirección de la veterinaria: ");
                red.modificarVeterinaria(vetIndex, nuevoNombreVet, nuevaDireccionVet);
                break;

            case "8":
                red.listarVeterinarias();
                const eliminarVetIndex = parseInt(await preguntar("Seleccione el número de la veterinaria a eliminar: "), 10) - 1;
                red.eliminarVeterinaria(eliminarVetIndex);
                break;

            case "9":
                red.listarClientes();
                const clienteModIndex = parseInt(await preguntar("Seleccione el número del cliente a modificar: "), 10) - 1;
                const nuevoNombreCliente = await preguntar("Ingrese el nuevo nombre del cliente: ");
                const nuevaDireccionCliente = await preguntar("Ingrese la nueva dirección del cliente: ");
                red.modificarCliente(clienteModIndex, nuevoNombreCliente, nuevaDireccionCliente);
                break;

            case "10":
                red.listarClientes();
                const eliminarClienteIndex = parseInt(await preguntar("Seleccione el número del cliente a eliminar: "), 10) - 1;
                red.eliminarCliente(eliminarClienteIndex);
                break;

            case "11":
                console.log("¡Gracias por usar el sistema!");
                continuar = false;
                break;//Cambia la variable continuar a false, lo que finaliza el bucle while y cierra el programa

            default:
                console.log("Opción no válida. Intente nuevamente.");//Si el usuario ingresa una opción fuera del rango, el sistema muestra un mensaje de error
        }
    }

    rl.close();//Una vez que el usuario elige salir (opción 11), se cierra la interfaz readline para liberar los recursos
};

iniciar();
