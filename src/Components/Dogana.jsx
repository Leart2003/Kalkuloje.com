import { useState, useMemo } from "react";
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
        const tatimiNeImport = vleraNum * tatimi;
         const tvsh = (vleraNum + akciza + tatimiNeImport) * Tvsh;
        const dogana = akciza + Tatimi + tvsh;
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
        <select className="kd-input"><option></option></select>
      </div>
      <div className="kd-row kd-row-checkbox">
        <span className="kd-label"></span>
        <label>Veture e re<input></input></label>
      </div>
      <div className="kd-row"><label className="kd-label">Vlera e vetures</label>
      <div className="kd-input-euro">
        <input type="number" className="kd-input"></input>
        <span className="kd-euro">€</span>
      </div>
      </div>
      <div className="kd-row">
        <label className="kd-label">Kubik(cmm)</label>
        <select className="kd-input">
          <option></option>
        </select>
      </div>
      <div className="kd-divider">----------</div>
      <div className="kd-row">
        <label className="kd-label">Akciza:</label>
        <div className="kd-input-euro"></div>
        <span className="kd-euro">€</span>
      </div>
       </div>
       <div className="kd-row">
        <label className="ld-label">Tatimi ne import</label>
        <div className="kd-input-euro">
          <div className="kd-result"></div>
          <span className="kd-euro">€</span>
        </div>
       </div>
       <div className="kd-row">
        <label className="kd-label">TVSH-ja</label>
        <div className="kd-input-euro">
          <div className="kd-result"></div>
          <span>€</span>
        </div>
       </div>
         <div className="kd-row">
        <label className="kd-label">Dogana</label>
        <div className="kd-input-euro">
          <div className="kd-result kd-result-orange"></div>
          <span className="kd-euro kd-euro-orange">€</span>
        </div>
       </div>
         <div className="kd-row">
        <label className="kd-label kd-label-orange">Totali</label>
        <div className="kd-input-euro">
          <div className="kd-result kd-result-orange"></div>
          <span className="kd-euro kd-euro-orange">€</span>
        </div>
       </div>
      </div>)
  }