import { useState } from "react"

export const Paragraf = () => {

    const [Paragraf, setParagaf] = useState("ASEP BUDIMAN")

    return (
       <div>
          <p>{Paragraf}</p>
       </div>
    )
}