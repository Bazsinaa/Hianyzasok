import Megoldás from "@/app/Megoldás"

type SearchParams = {
  hónap?: string;
  nap?: string;
  nap_neve?: string;
  óra?: string;
}


export default async function HomePage({searchParams}: {searchParams: SearchParams}) {
  const p = await searchParams;
  let hónap: number = p.hónap ? Number(p.hónap) : 2;
  let nap: number = p.nap ? Number(p.nap) : 3;
  const m: Megoldás = new Megoldás("naplo.txt")

  return( 
  <div>
    <div>2. feladat <br />
    {m.bejegyzésekSzáma}</div>
    <div>
      3. feladat
      <br />
      Az igazolt hiányzások száma {m.összesIgazoltDb}
    </div>
    <div>
      5.feladat
      <br />
      <p>A hónap sorszáma= <input name="hónap" defaultValue={hónap} type="text" /></p>
      <p>A nap sorszáma= <input name="nap" defaultValue={nap} type="text" /></p>
      <button className="hidden" type="submit" />
    </div>
  </div>)
  
}
