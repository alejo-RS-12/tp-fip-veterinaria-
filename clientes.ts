//se importan los modulos 
import { Veterinaria } from "./veterinaria";
import { IDgenerador } from "./generadorID";

export class Clientes extends Veterinaria {
    private _vip: boolean;
    private _telefono: number;
    private _NroVisitas: number;
    public sucursal: string | null;
    public _ID: number;

    constructor(telefono: number, NroVisitas: number, nombre: string, direccion: string, vip: boolean) {
        super(nombre, direccion);
        this._NroVisitas = NroVisitas;
        this._telefono = telefono;
        this._vip = vip;
        this.sucursal = null;
        this._ID = IDgenerador.generateUnicoId();
    }

    get vip(): boolean {
        return this._vip;//se define un getter para acceder al atributo _vip permite obtener el estado vip del cliente
    }

    incrementarVisitas(): void {//incrementa el contador de nroVisitas en 1 
        this._NroVisitas++;
        console.log(`Visita registrada. El cliente "${this.nombre}" ha visitado la sucursal ${this.sucursal} ${this._NroVisitas} veces.`);

        if (this._NroVisitas >= 5 && !this._vip) {// si el cliente alcanza 5 visitas o mas se convierte a vip
            this._vip = true;
            console.log(`¡Felicidades! El cliente "${this.nombre}" ahora es VIP.`);
        }
    }
}
