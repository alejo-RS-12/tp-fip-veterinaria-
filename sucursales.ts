import{Veterinaria} from"./veterinaria";

export class RedDeVeterinarias {
    private veterinarias: Veterinaria[] = [];
  
    // Método para agregar una nueva veterinaria
    public agregarVeterinaria(veterinaria: Veterinaria): void {
      this.veterinarias.push(veterinaria);
      console.log(`Veterinaria "${veterinaria.nombre}" agregada a la red.`);
    }
  
    // Método para listar todas las veterinarias en la red
    public listarVeterinarias(): void {
     this.veterinarias.forEach((veterinaria, index) => {
          console.log(`${index + 1}. ${veterinaria.nombre} - ${veterinaria.direccion}`);
        });
    } 
}
  
