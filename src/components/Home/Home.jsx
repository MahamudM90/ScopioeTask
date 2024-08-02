import Header from "./Navbar/Navbar";
import LeftSide from "./Leftside/Leftside";
import MiddleSide from "./MiddleSide/MiddleSide";
import Navbar from "./Navbar/Navbar"


export default function () {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <LeftSide></LeftSide>
                <div className="bg-[#EEF2F5]">
                    <MiddleSide></MiddleSide>
                </div>
            </div>
        </div>
    )
}