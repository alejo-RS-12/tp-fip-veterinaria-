import { Veterinaria } from "./veterinaria";
import { Clientes } from "./clientes";
import { Paciente } from "./Paciente";

export class RedDeVeterinarias {
  public veterinarias: Veterinaria[] = [];
  public clientes: Clientes[] = [];
  public pacientes: Paciente [] = [];

  public agregarVeterinaria(veterinaria: Veterinaria): void {
    this.veterinarias.push(veterinaria);
    console.log(`Veterinaria "${veterinaria.nombre}" agregada a la red.`);
  } // Esta funcion agrega una nueva veterinaria al arreglo de Veterinarias

  public listarVeterinarias(): void {
    console.log (`Nº ORDEN  || NOMBRE VETERINARIA  ||  DIRECCION  `)
    this.veterinarias.forEach((veterinaria, index) => {
      console.log(
        `${index + 1}. ${veterinaria.nombre} - ${veterinaria.direccion}`
      );
    });
  } // Esta funcion recorre el arreglo a través del foreach y muestra por consola el contenido del arreglo



  public agregarCliente(cliente: Clientes): void {
    this.clientes.push(cliente);
    console.log(`Cliente "${cliente.nombre}" agregado correctamente.`);
  } // Esta funcion agrega un nuevo cliente al arreglo Clientes

  public listarClientes(): void {
    console.log (`Nº ORDEN  || NOMBRE DEL CLIENTE  ||  ID      `)
    this.clientes.forEach((clientes, index) => {
      console.log( `${index + 1}. ${clientes.nombre} - ${clientes.IDgenerador}`
      );
    });
  } // Esta funcion recorre el arreglo a través del foreach y muestra por consola el contenido del arreglo



  public agregarPaciente (nuevoPaciente: Paciente): void {
    this.pacientes.push(nuevoPaciente);
    console.log(`Paciente ${nuevoPaciente.nombre} ID: ${nuevoPaciente.id} agregado al cliente ID: ${nuevoPaciente.idDuenio}.`);
  } // Esta funcion agrega un nuevo cliente al arreglo Clientes

  public listarPacientes (): void {
    console.log (`Nº ORDEN  || NOMBRE DEL PACIENTE  ||  ID    ||  ESCPECIE  || ID del DUEÑO   `)
    this.pacientes.forEach((paciente, index) => {
        console.log(`    ${index + 1}.     -      ${paciente.nombre}            - ${paciente.id} -       ${paciente.especie}   -     ${paciente.idDuenio}`);
    }); // Esta funcion recorre el arreglo a través del foreach y muestra por consola el contenido del arreglo
  }

  public eliminarPaciente (id: number): void {
    let index = this.pacientes.findIndex((paciente) => paciente.id === id);
    if (index !== -1) {
      let eliminar = this.pacientes.splice(index, 1)[0];
      console.log(`Paciente ${eliminar.nombre}  ID: ${eliminar.id}  ha sido eliminado.`);
      } else {
        console.log(`El ID ${id} no fue encontrado. Verifique los datos y vuelva a intentarlo.`);
      }
    }
  }


