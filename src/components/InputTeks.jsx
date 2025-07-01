import { useState } from "react"

export const InputText = ({nilaiAwal , padding}) => {
    const [input, setValue] = useState(nilaiAwal)
    return (
      <div>
          <p>{input}</p>
          <input
           type="text" value={input} onChange={(event) => setValue(event.target.value)}
           style={{ 
              paddingBottom:5,
              paddingTop:5,
              borderRadius:4

            }}
            /> 
      </div>
    )
}