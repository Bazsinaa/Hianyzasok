import Hiányzás from "@/app/Hiányzás";
import fs from "fs"

export default class Megoldás{
    #hiányzások: Hiányzás[] = [];

    get bejegyzésekSzáma(): number {
        return this.#hiányzások.length
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
}