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
                    <h5 className='font-poppins'>Home</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <BsPeople className='w-5 h-5 color-[#5C635A]' />
                    <h5 className='font-poppins text-[#5C635A]'>New Listing</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img className='color-[#5C635A]' src={search}></img>
                    <h5 className='font-poppins text-[#5C635A]'>Search</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img className='color-[#5C635A]' src={paper}></img>
                    <h5 className='font-poppins text-[#5C635A]'>About</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img className='color-[#5C635A]' src={heart}></img>
                    <h5 className='font-poppins text-[#5C635A]'>Favourite</h5>
                </div>
                <div className='mt-2'>
                    <hr className='w-[210px]'></hr>
                </div>
                <div className='flex gap-1 mt-2'>
                    <img className='color-[#5C635A]' src={circle}></img>
                    <h5 className='font-poppins text-[#5C635A]'>Help Center</h5>
                </div>
                <div className='flex gap-1 mt-2'>
                   <CiSettings className='w-6 h-6 color-[#5C635A]'/>
                    <h5 className='font-poppins text-[#5C635A]'>Settings</h5>
                </div>
            </div>
        </div>
    )
}