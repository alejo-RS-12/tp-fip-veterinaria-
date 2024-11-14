import{IDgenerador} from"./generadorID";
import * as readline from 'readline';
import { Veterinaria } from "./veterinaria";

export class Clientes extends Veterinaria{
    private _vip : boolean;
    private _telefono : number;
    private _NroVisitas: number;

    constructor(telefono : number, NroVisitas: number, nombre: string, direccion: string, vip : boolean){
        super(nombre, direccion);
        this._NroVisitas = NroVisitas;
        this._telefono = telefono;
        this._vip = vip;
        this. _ID = IDgenerador.generateUnicoId();
    }


    //getter y setters
    get NroVisitas89(): number{
        return this._NroVisitas;
    }

    get telefono(): number{
        return this._telefono;
    }

    get vip(): boolean{
        return this._vip;
    }

    set NroVisitas(NroVisitas: number){
        this._NroVisitas = NroVisitas;
    }

    set telefono(telefono:number){
        this._telefono = telefono;
    }

    set vip(vip: boolean){
        this._vip = vip;
    }

    altaCliente(){
        console.log(``)
    }
}