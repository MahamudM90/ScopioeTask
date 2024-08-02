import vector from '../../../assets/Vector.svg'
import group from '../../../assets/Group.svg'
export default function SubHeader() {
    return (
        <div className='bg-[#FFFFFF] m-2 rounded'>
            <div className='flex rounded p-2'>
                <div className='w-[1130px] h-[212px] '>
                    <h1 className='w-[587px] h-[14px] text-xl'>I'm Looking for Massage Therapist Near...</h1>
                    <br></br>
                    <p className='w-[489px] h-[33px]'>In using this site, I agree to be bound by the <span className='underline'>Terms of Service</span>  and  <span className='underline'>Privacy Policy</span></p>
                    <br></br>
                    <div>
                        <input type='text' placeholder='ZIP code or city name' className='border border-gray-300 rounded shadow-sm focus:outline-none w-[430px] h-[35px] bg-[#EEF2F5] p-2'></input>
                    </div>
                </div>
                <div>
                    <img className='w-[351px] h-[172px]' src={vector}></img>
                </div>
                <div className='-ml-44'>
                    <img className=' w-[276.77px] h-[172px]' src={group}></img>
                </div>
            </div>
        </div>


    )
}