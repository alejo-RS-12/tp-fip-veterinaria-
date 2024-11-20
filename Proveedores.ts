import { Veterinaria } from "./veterinaria";
import { IDgenerador } from "./generadorID";

export class Proveedor extends Veterinaria {
    private id: number;
    private telefono: string;
    private activo: boolean; // Nuevo atributo para manejar el estado del proveedor

    constructor(nombre: string, direccion: string, telefono: string) {
        super(nombre, direccion);
        this.id = IDgenerador.generateUnicoId(); // Genera un ID único
        this.telefono = telefono;
        this.activo = true; // Inicialmente, todos los proveedores están activos
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getTelefono(): string {
        return this.telefono;
    }

    getNombre(): string {
        return this.nombre;
    }

    getDireccion(): string {
        return this.direccion;
    }

    isActivo(): boolean {
        return this.activo;
    }

    // Setters
    setTelefono(nuevoTelefono: string): void {
        this.telefono = nuevoTelefono;
    }

    setActivo(estado: boolean): void {
        this.activo = estado;
    }

    // Métodos de actualización
    actualizarNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    actualizarDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }

    actualizarTelefono(nuevoTelefono: string): void {
        this.setTelefono(nuevoTelefono);
    }

    // Método para dar de baja al proveedor
    darDeBaja(): void {
        this.setActivo(false);
    }
}
