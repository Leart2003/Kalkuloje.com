import { useMemo, useState } from "react";
import "./Dogana.css";


const Akciza = [
  { label: "0 - 2000 cmm", min: 0, max: 2000, akciza: 400 },
  { label: "2001 - 3000 cmm", min: 2001, max: 3000, akciza: 700 },
  { label: "3001+ cmm", min: 3001, max: Infinity, akciza: 1000 },
];

const Years = Array.from({ length: 15 }, (_, i) => 2025 - i);
const Tatimi =0.1;
const Tvsh = 0.18;

const Dogana = () => 
  {
  
    const[viti, setViti] = useState(Years[0]);
    const[vetureERe, setVetureERe] = useState(false);
    const [vlera, setVlera] = useState(10000);
    const [kubikIndex, setKubikIndex] = useState(0);

    const rezultatet = useMemo(() => {
        const vleraNum = Number(vlera) || 0;
        const bracket = Akciza[kubikIndex];
        const akciza = vetureERe ? bracket.akciza * 1.2 : bracket.akciza;
        const tatimiNeImport = vleraNum * Tatimi;
         const tvsh = (vleraNum + akciza + tatimiNeImport) * Tvsh;
      const dogana = akciza + tatimiNeImport + tvsh;
         const totali = vleraNum + dogana;

         return{akciza: Math.round(akciza),
          tatimiNeImport: Math.round(tatimiNeImport),
          tvsh: Math.round(tvsh),
          dogana: Math.round(dogana),
          totali: Math.round(totali)
         };
    },[vlera, kubikIndex, vetureERe]);

    const formatEuro = (n) => n.toLocaleString("de-DE");
    return(<div className="kd-wrapper">
      <div className="kd-card"><h1>Kalkulo doganen per veturen tuaj</h1>
      <div className="kd-row">
        <label className="kd-label">Viti prodhimit</label>
        <select className="kd-input" value={viti}
        onChange={(e) =>setViti(Number(e.target.value))}>
          {Years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="kd-row kd-row-checkbox">
        <span className="kd-label"></span>
        <label className="kd-checkbox-label">Veture e re<input type="checkbox"
        checked={vetureERe}
        onChange={(e)=>setVetureERe(e.target.checked)}></input>Vetur e re</label>
      </div>

      <div className="kd-row"><label className="kd-label">Vlera e vetures</label>
      <div className="kd-input-euro">
        <input type="number" className="kd-input"
        type="number"
              className="kd-input"
              value={vlera}
              min={0}
              onChange={(e) => setVlera(e.target.value)}></input>
        <span className="kd-euro">€</span>
      </div>
      </div>

      <div className="kd-row">
        <label className="kd-label">Kubik(cmm)</label>
        <select className="kd-input"
        value={kubikIndex}
            onChange={(e) => setKubikIndex(Number(e.target.value))}>
            {Akciza.map((b, i) => (
              <option key={b.label} value={i}>
                {b.label}
              </option>
            ))}
        </select>
      </div>
      <div className="kd-divider">----------</div>
      <div className="kd-row">
        <label className="kd-label">Akciza:</label>
        <div className="kd-input-euro">
          <div className="kd-result">{formatEuro(rezultatet.akciza)}</div>
        </div>
        <span className="kd-euro">€</span>
      </div>
    


       <div className="kd-row">
        <label className="ld-label">Tatimi ne import</label>
        <div className="kd-input-euro">
          <div className="kd-result">{formatEuro(rezultatet.tatimiNeImport)}</div>
          <span className="kd-euro">€</span>
        </div>
       </div>

       <div className="kd-row">
        <label className="kd-label">TVSH-ja</label>
        <div className="kd-input-euro">
          <div className="kd-result">{formatEuro(rezultatet.tvsh)}</div>
          <span>€</span>
        </div>
       </div>
         <div className="kd-row">
        <label className="kd-label">  Dogana (Akciza + Tatimi
            <br />
            në import + TVSH) :</label>
        <div className="kd-input-euro">
          <div className="kd-result kd-result-green">{formatEuro(rezultatet.dogana)}</div>
          <span className="kd-euro kd-euro-green">€</span>
        </div>
       </div>
         <div className="kd-row">
        <label className="kd-label kd-label-green">( Vetura + Dogana ) :</label>
        <div className="kd-input-euro">
          <div className="kd-result kd-result-green">
            {formatEuro(rezultatet.totali)}
          </div>
          <span className="kd-euro kd-euro-green">€</span>
        </div>
       </div>
      </div>
         </div>)
  }
  export default Dogana;