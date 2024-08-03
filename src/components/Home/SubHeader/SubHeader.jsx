import vector from '../../../assets/Vector.svg'
import group from '../../../assets/Group.svg'
export default function SubHeader() {
    return (
        <div className='bg-[#FFFFFF] m-2 rounded w-[1070px] h-[212px]'>
            <div className='md:flex rounded p-4'>
                <div className='w-[587px] h-[72px] '>
                    <h1 className='w-[587px] h-[14px] text-xl text-[#152A16] font-poppins'>I'm Looking for Massage Therapist Near...</h1>
                    <br></br>
                    <p className='w-[489px] h-[33px] text-[#2E3439] font-poppins'>In using this site, I agree to be bound by the <span className='underline text-[#156BCA]'>Terms of Service</span>  and  <span className='underline  text-[#156BCA]'>Privacy Policy</span></p>
                </div>
                <div>
                    <img className='w-[351px] h-[172px]' src={vector}></img>
                </div>
                <div className='-ml-44'>
                    <img className=' w-[276.77px] h-[172px]' src={group}></img>
                </div>
            </div>
            <div className='flex items-center -my-20 ml-3'>
                <div>
                    <input type='text' placeholder='ZIP code or city name' className='border border-gray-300 rounded shadow-sm focus:outline-none w-[430px] h-[36px] bg-[#EEF2F5] p-2 font-poppins'></input>
                </div>
                <div>
                    <button className='w-[63px] h-[33px] bg-[#156BCA] rounded -ml-1 text-[#FFFFFF] font-poppins'>Go</button>
                </div>
            </div>
        </div>


    )
}