import Megoldás from "@/app/Megoldás";

type SearchParams = {
  hónap?: string;
  nap?: string;
  napPeve?: string;
  óra?: string;
};

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  const p = await searchParams;
  const hónap: number = Number(p.hónap) ? Number(p.hónap) : 2;
  const nap: number = Number(p.nap) ? Number(p.nap) : 3;
  const napNeve: string = p.napPeve ? p.napPeve : "szerda";
  const óra: number = Number(p.óra) ? Number(p.óra) : 3;
  const m: Megoldás = new Megoldás("naplo.txt");

  return (
    <div>
      <div>
        2. feladat <br />
        {m.bejegyzésekSzáma}
      </div>
      <div>
        3. feladat
        <br />
        Az igazolt hiányzások száma {m.összesIgazoltDb}
      </div>
      <form>
        <p>5.feladat</p>
        <br />
        <p>
          A hónap sorszáma= <input defaultValue={hónap} name="hónap" type="text" />
        </p>
        <p>
          A nap sorszáma= <input defaultValue={nap} name="nap" type="text" />
        </p>
        <p>Azon a napon {Megoldás.hetnapja(hónap, nap)} volt.</p>
        <p>6.feladat</p>
        <br />
        <p>
          A nap neve= <input defaultValue={napNeve} name="napNeve" type="text" />
        </p>
        <p>
          Az óra sorszáma= <input defaultValue={óra} name="óra" type="text" />
        </p>
        <p>Ekkor összesen {m.összesHiányzás(napNeve, óra)} óra hiányzás történt.</p>
        <button className="hidden" type="submit" />
      </form>
    </div>
  );
}
