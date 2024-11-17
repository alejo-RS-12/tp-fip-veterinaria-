import { IDgenerador } from "./generadorID"; // Cambiar a "IDGenerador" con G mayúscula

export class Proveedor {
    private _id: number;
    private _nombre: string;
    private _telefono: string;

    constructor(nombre: string, telefono: string) {
        this._id = IDgenerador.generateUnicoId();
        this._nombre = nombre;
        this._telefono = telefono;
    }

    // Getters
    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get telefono(): string {
        return this._telefono;
    }

    // Setters
    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }

    set telefono(nuevoTelefono: string) {
        this._telefono = nuevoTelefono;
    }

    // Método para actualizar el nombre
    actualizarNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre; 
    }

    // Método para actualizar el teléfono
    actualizarTelefono(nuevoTelefono: string): void {
        this.telefono = nuevoTelefono; 
    }
}
