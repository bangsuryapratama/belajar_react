import { useState } from "react"

export const Gambar = ({gambar}) => {
    const [src] = useState(gambar)
    return (
       <img src={src} 
       
       style={{
            marginLeft :1100
        }}
       
       />
    )
}