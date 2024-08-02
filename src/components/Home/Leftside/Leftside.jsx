import category from '../../../../public/Category.svg'
import heart from '../../../../public/heart.svg'
import paper from '../../../../public/Paper.svg'
import search from '../../../../public/Search.svg'
import circle from '../../../../public/Info Circle.png'
import { BsPeople } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export default function LeftSide() {
    return (
        <div className="w-[250px]h-[1275px]">
            <div className='p-6'>
                <div className='flex gap-1 items-center'>
                    <img src={category}></img>
                    <h5>Home</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <BsPeople className='w-5 h-5' />
                    <h5>New Listing</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img src={search}></img>
                    <h5>Search</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img src={paper}></img>
                    <h5>About</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img src={heart}></img>
                    <h5>Favourite</h5>
                </div>
                <div className='mt-2'>
                    <hr className='w-[210px]'></hr>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img src={circle}></img>
                    <h5>Help Center</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                   <CiSettings className='w-6 h-6'/>
                    <h5>Settings</h5>
                </div>
            </div>
        </div>
    )
}