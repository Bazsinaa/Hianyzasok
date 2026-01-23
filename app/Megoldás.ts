import Hiányzás from "@/app/Hiányzás";
import fs from "fs"

export default class Megoldás{
    #hiányzások: Hiányzás[] = [];

    constructor(forrás: string){
        let aktDátum: string = "";
        fs.readFileSync(forrás)
        .toString()
        .split("\n")
        .forEach((sor) => {
            const aktSor: string = sor.trim();
        });
    }
}