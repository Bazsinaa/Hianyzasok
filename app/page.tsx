
import Megoldás from "@/app/Megoldás"

export default function HomePage() {

  const m: Megoldás = new Megoldás("naplo.txt")

  return( 
  <div>
    <div>2. feladat <br />
    {m.bejegyzésekSzáma}</div>
  </div>)
  
}
