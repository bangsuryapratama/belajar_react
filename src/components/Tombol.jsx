// export const Tombol = () => {
//     return (
//         <button>Tombol</button>
//     )
// }

import { useState } from "react"


const Tombol = ({teks , nilaiAwal, warnaTombol ,padding}) => {

    const [angka, setAngka] = useState(nilaiAwal)
    

    return (
        <div>
             <p>{angka}</p>
             <button
              onClick={()=>setAngka(angka+1)}
              style={{ 
                 backgroundColor:warnaTombol,
                 padding:padding
               }}
              >
              {teks}</button>
        </div>
    )
}

// mengexport hanya 1 componen
export default Tombol