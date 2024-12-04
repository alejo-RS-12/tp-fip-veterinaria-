import { Veterinaria } from "./veterinaria";
import { IDgenerador } from "./generadorID";

export class Clientes extends Veterinaria {
    private _vip: boolean;
    private _telefono: number;
    private _NroVisitas: number;
    public sucursal: string | null;
    public _ID: number;

    constructor(telefono: number, NroVisitas: number, nombre: string, direccion: string, vip: boolean, id?: number) {
        super(nombre, direccion); // Llama al constructor de la clase base Veterinaria.

        this._NroVisitas = NroVisitas;
        this._telefono = telefono;
        this._vip = vip;
        this.sucursal = null;
        this._ID = id ?? IDgenerador.generateUnicoId(); // Genera un ID único si no se proporciona uno.
    }

    // Devuelve si el cliente es VIP.
    get vip(): boolean {
        return this._vip;
    }

    // Incrementa el número de visitas del cliente y actualiza estado VIP.
    incrementarVisitas(): void {
        this._NroVisitas++;
        console.log(`Visita registrada. El cliente "${this.nombre}" ha visitado la sucursal ${this.sucursal} ${this._NroVisitas} veces.`);

        if (this._NroVisitas >= 5 && !this._vip) {
            this._vip = true;
            console.log(`¡Felicidades! El cliente "${this.nombre}" ahora es VIP.`);
        }
    }
}
