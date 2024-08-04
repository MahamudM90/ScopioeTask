import { useContext, useState } from "react"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { AuthContext } from "../../../provider/AuthProvider"
import { Link } from "react-router-dom"

export default function Navbar(){
    const [open,setOpen] = useState(false)

    const {logOut, user} = useContext(AuthContext);

    const handleLogout=()=>{
        logOut().
        then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
  
      }
    
    const routes = [
        {
            id:1, path:'/', name: 'Home'
        },
        {
            id:2, path:'/about', name: 'About'
        },
        {
            id:3, path:'/services', name: 'Services'
        },
       
    ]
    return(
        <nav>
            <div>
            {
          
          user?
          <div className="flex">
            <p>{user.email}</p>
            <img src={user.photoURL}></img>
            <button onClick={handleLogout} className="btn btn-neutral w-1/4 h-1/5">SignOut
          </button>
          </div>
          :
          <Link to='/signin' className="btn btn-neutral w-1/4 h-1/5">LogIn</Link>
          
        }
            </div>
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open===true ? <AiOutlineClose></AiOutlineClose>:  <AiOutlineMenu></AiOutlineMenu>
                }
           
            </div>
           
        <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-16': '-top-60'}  px-6 `}>
            {
             routes.map((route)=><li key={route.id} route={route}>{route.name}</li>)
            }
        </ul>
        </nav>
    )
}