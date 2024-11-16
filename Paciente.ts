export class Paciente {
    public id: number; // ID compartido con el dueño
    public nombre: string;
    public especie: string;

    constructor(nombre: string, especie: string, idDuenio: number) {
        this.id = idDuenio; // Vincula el ID del dueño
        this.nombre = nombre;
        this.especie = this.categorizarEspecie(especie);
    }

    private categorizarEspecie(especie: string): string {// evalua si la especie ingresada es felino o canino, sino es exotico
        const especieNormalizada = especie.toLowerCase();
        if (especieNormalizada === "felino") return "Felino";
        if (especieNormalizada === "canino") return "Canino";
        return "Exótico"; // Predeterminado para especies no conocidas
    }
}
