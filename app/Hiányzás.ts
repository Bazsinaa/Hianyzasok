export default class Hiányzás{
    #név: string;
    #hiányzásKód: string;
    #hónap: number;
    #nap: number;


    constructor(adatsor: string, dátum: string){
        const m: string[] = adatsor.split(" ");
        this.#név = `${m[0]} ${m[1]}`;
        this.#hiányzásKód = m[2];
        this.#hónap = parseInt(m[1]);
        this.#nap = parseInt(m[2])
    }
}