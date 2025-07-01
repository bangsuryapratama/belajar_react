import { useEffect, useState } from "react"

const Photos = () =>{

    const [data, setData] = useState()


    useEffect (() => {

        const ambil_data = async () => {
            const res = await fetch ('https://jsonplaceholder.typicode.com/photos')
            const data = await res.json()
            setData(data)
        }
        ambil_data()
    },[])



    return(
        <div>
            <h1>Photos Page</h1>
            <div>
                {
                    data && data.map((photos, index) => (
                        <div key={photos.id}>
                             <div>{photos.title}</div>
                             <div>{photos.url}</div>
                             <div>{photos.thumbnailUrl}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Photos