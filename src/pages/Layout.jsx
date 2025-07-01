import { Link, Outlet } from "react-router-dom";

const Layout = () =>{
    return(
        <div>
           <div style={{ display:'flex', gap:'10px' }}>
                   <Link to={'/'}>Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Todo'}>Todo</Link>
                    <Link to={'/Contact'}>Contact</Link>
                    <Link to={'/User'}>User</Link>
                    <Link to={'/Photos'}>Photos</Link>
           </div>
           <Outlet/>
        </div>
    )
}

export default Layout