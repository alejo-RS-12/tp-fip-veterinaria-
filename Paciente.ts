import{IDgenerador} from"./generadorID";
import * as readline from 'readline';


export class Paciente {
    public id: number
    public nombre: string;
    public especie: string
    public idDuenio: number;

    
    constructor(nombre:string, especie: string, idDuenio: number) {
        this.id = IDgenerador.generateUnicoId();
        this.nombre = nombre;
        this.especie = especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato' ? especie : 'exótica';
        this.idDuenio = idDuenio;
    }

    modificarDatos(nombre: string, especie: string): void {
        this.nombre = nombre;
        this.especie = especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato' ? especie : 'exótica';
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getIdDuenio(): number {
        return this.idDuenio;
    }

    public setIdDuenio(idDuenio: number): void {
        this.idDuenio = idDuenio;
    }


}