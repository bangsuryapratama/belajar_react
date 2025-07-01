import { useEffect, useState } from "react"

const Todo = () =>{

    const [data, setData] = useState()


    useEffect (() => {

        const ambil_data = async () => {
            const res = await fetch ('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setData(data)
        }
        ambil_data()
    },[])



    return(
        <div>
            <h1>Todo Page</h1>
            <div>
                {
                    data && data.map((todo, index) => (
                        <div key={todo.id}>
                             {todo.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo