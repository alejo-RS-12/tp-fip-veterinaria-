export class Paciente {
    public id: number; // ID compartido con el dueño.
    public nombre: string;
    public especie: string;

    constructor(nombre: string, especie: string, idDuenio: number) {
        this.id = idDuenio; // Vincula el ID del dueño.
        this.nombre = nombre;
        this.especie = this.categorizarEspecie(especie);
    }

    // Clasifica la especie ingresada.
    private categorizarEspecie(especie: string): string {
        const especieNormalizada = especie.toLowerCase();
        if (especieNormalizada === "felino") return "Felino";
        if (especieNormalizada === "canino") return "Canino";
        return "Exótico"; // Por defecto para especies no reconocidas.
    }
}
