export class IDgenerador {
    private static generatedIds: Set<number> = new Set();

    static generateUnicoId(): number {
        let id: number;
        do {
            id = Math.floor(Math.random() * 100000);
        } while (this.generatedIds.has(id));
        
        this.generatedIds.add(id);
        return id;
    }
}
