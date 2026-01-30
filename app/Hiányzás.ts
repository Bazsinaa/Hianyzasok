export default class Hiányzás{
    #név: string;
    #hiányzásKód: string;
    #hónap: number;
    #nap: number;


    get hianyzasDb(): number {
        return this.igazoltDb + this.igazolatlanDb
    }

    get igazoltDb(): number {
        return this.#megszámol("X")
    }

    get igazolatlanDb(): number {
        return this.#megszámol("I")
    }

    get hónap(): number {
        return this.#hónap
    }

    get nap(): number {
        return this.#nap
    }


    constructor(adatsor: string, dátum: string){
        let m: string[] = adatsor.split(" ");
        this.#név = `${m[0]} ${m[1]}`;
        this.#hiányzásKód = m[2];
        m = dátum.split(" ")
        this.#hónap = parseInt(m[1]);
        this.#nap = parseInt(m[2])
   
    }

    #megszámol(ch: string): number {
        let db = 0;
        for (const e of this.#hiányzásKód) {
            if (e == ch) db++;
        }
        return db
    }

    voltHiányzás(óraSorszáma: number): boolean {
        const óraIndexe = óraSorszáma -1;
        return this.#hiányzásKód[óraIndexe] == "I" || this.#hiányzásKód[óraIndexe] == "X"
    }

}
