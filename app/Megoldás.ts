import Hiányzás from "@/app/Hiányzás";
import fs from "fs"

export default class Megoldás{
    #hiányzások: Hiányzás[] = [];

    get bejegyzésekSzáma(): number {
        return this.#hiányzások.length
    }

    get összesIgazoltDb(): number {
        let db = 0;
        for (const e of this.#hiányzások) {
            db += e.igazoltDb            
        }
        return db
    }

    get összesIgazolatlanDb(): number {
        let db = 0;
        for (const e of this.#hiányzások) {
            db += e.igazolatlanDb            
        }
        return db
    }

    get #hiányzásokStat(): Map<string, number> {
        const stat: Map<string, number> = new Map<string, number>();

        return stat
    }

    összesHiányzás(napNeve: string, óraSorszáma: number): number {
        let összesHiányzás: number = 0;
        for (const e of this.#hiányzások) {
            if(Megoldás.hetnapja(e.hónap, e.nap) == napNeve && e.voltHiányzás(óraSorszáma)){
                összesHiányzás += 1;
            }
        }
        return összesHiányzás;
    }

    constructor(forrás: string){
        let aktDátum: string = "";
        fs.readFileSync(forrás)
        .toString()
        .split("\n")
        .forEach((sor) => {
            const aktSor: string = sor.trim();
            if (aktSor[0] == "#") aktDátum = aktSor;
            else{
                if (aktSor.length > 0){
                    this.#hiányzások.push(new Hiányzás(aktSor, aktDátum))
                }
            }
        });
    }

    static hetnapja(honap: number, nap: number): string {
        const napnev: string[] = ["vasarnap", "hetfo", "kedd", "szerda", "csutortok", "pentek", "szombat", ]
        const napszam: number[] = [0, 30, 59, 90, 120, 151, 181, 212, 243, 273, 304, 335]
        const napsorszam: number = (napszam[honap - 1] + nap) % 7;
        return napnev[napsorszam]
    }
}