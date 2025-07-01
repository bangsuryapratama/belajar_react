import { useEffect, useState } from "react"

const User = () =>{

    const [data, setData] = useState()


    useEffect (() => {

        const ambil_data = async () => {
            const res = await fetch ('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setData(data)
        }
        ambil_data()
    },[])



    return(
        <div>
            <h1>User Page</h1>
            <div>
                {
                    data && data.map((user, index) => (
                        <div key={user.id}>
                            <div>Name : {user.name}</div>
                            <div>Username : {user.username}</div>
                            <div>Email : {user.email}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default User