import{IDgenerador} from"./generadorID";
import * as readline from 'readline';

export class Veterinaria{
    private _nombre: string;
    private _direccion: string;
    private _ID: number;

    
    constructor(nombre: string, direccion: string){
        this. _nombre = nombre;
        this. _direccion = direccion;
        this. _ID = IDgenerador.generateUnicoId();
    }

    //getter y setters
     get nombre() : string{
        return this._nombre;
     }

     get direccion() : string{
        return this._direccion;
     }

     get IDgenerador() : number{
        return this._ID;
     }

    set nombre(nombre: string){
        this._nombre = nombre;

    }

    set direccion(direccion : string){
        this._direccion = direccion;
    }

    set IDgenerador(IDgenerador : number){
        this._ID = IDgenerador; 
    }

    //metodos generales
    altaVet(){
        console.log(`alta veterinaria: ${this.nombre}, ID: ${this.IDgenerador}`);
    }

    bajaVet(){
        console.log(`baja veterinaria: ${this.nombre}, ID: ${this.IDgenerador}`);
    }

    public modificar(nuevoNombre: string, nuevaDireccion: string): void{
        this. _nombre = nuevoNombre;
        this. _direccion = nuevaDireccion;
        console.log (`veterinaria modificada: ${this.nombre}, direccion: ${this.direccion}`);
    }

    public mostrar(): void{
        console.log(`ID: ${this.IDgenerador}, Nombre: ${this.nombre}, direccion: ${this.direccion}`)
    }
}