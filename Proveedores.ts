import { Veterinaria } from "./veterinaria";
import { IDgenerador } from "./generadorID"; // Cambiar a "IDGenerador" con mayúscula?

export class Proveedor extends Veterinaria {
    private id: number;
    private telefono: string;

    constructor(nombre: string, direccion: string, telefono: string) {
        super(nombre, direccion);
        this.id = IDgenerador.generateUnicoId();
        this.telefono = telefono;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getTelefono(): string {
        return this.telefono;
    }

    // Setters
    setTelefono(nuevoTelefono: string) {
        this.telefono = nuevoTelefono;
    }

    // Métodos de actualización
    actualizarNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre; // setter heredado de `Veterinaria` ¿debería ser private?
    }

    actualizarDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion; // setter heredado de `Veterinaria`
    }

    actualizarTelefono(nuevoTelefono: string): void {
        this.setTelefono(nuevoTelefono);
    }
}
