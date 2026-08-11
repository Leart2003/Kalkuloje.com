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
    return(<div className="kd-wrapper"></div>)
  }