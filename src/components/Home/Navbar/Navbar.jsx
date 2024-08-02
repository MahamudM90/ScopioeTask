import { useState } from "react"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar(){
    const [open,setOpen] = useState(false)
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