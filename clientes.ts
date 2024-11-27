
import { Veterinaria } from "./veterinaria";
import { IDgenerador } from "./generadorID";

export class Clientes extends Veterinaria {
    private _vip: boolean;
    private _telefono: number;
    private _NroVisitas: number;
    public sucursal: string | null;
    public _ID: number;

    // Constructor de la clase Clientes.
    // Se inicializan los datos del cliente, como teléfono, visitas iniciales, nombre y dirección.
    // Si se proporciona un ID, se usa ese; de lo contrario, se genera uno único automáticamente.
    constructor(telefono: number, NroVisitas: number, nombre: string, direccion: string,  vip: boolean, id?: number) {

        super(nombre, direccion); // Llama al constructor de la clase base Veterinaria.
        
        this._NroVisitas = NroVisitas; // Establece el número inicial de visitas.
        this._telefono = telefono; // Guarda el número de teléfono del cliente.
        this._vip = vip; // Indica si el cliente es VIP al crearse.
        this.sucursal = null; // Inicialmente no tiene sucursal asignada.
        this._ID = id ?? IDgenerador.generateUnicoId(); // Usa el ID proporcionado o genera uno nuevo.
    }

    // Devuelve si el cliente es VIP.
    get vip(): boolean {
        return this._vip;
    }

    // Incrementa el número de visitas del cliente.
    // Si alcanza 5 visitas, el cliente se convierte en VIP automáticamente.
    incrementarVisitas(): void {
        this._NroVisitas++;
        console.log(`Visita registrada. El cliente "${this.nombre}" ha visitado la sucursal ${this.sucursal} ${this._NroVisitas} veces.`);

        if (this._NroVisitas >= 5 && !this._vip) {
            this._vip = true; // Actualiza el estado a VIP.
            console.log(`¡Felicidades! El cliente "${this.nombre}" ahora es VIP.`);
        }
    }
}
