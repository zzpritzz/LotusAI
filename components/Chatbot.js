import Link from "next/link";
import {FaRobot} from "react-icons/fa"
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useState } from "react";
export default function Chatbot(){
    const [isOpen, setIsOpen] = useState(false);
    const [text,setText]=useState("");
    return (
        <Popover placement="left-end" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} className="w-full ">
        <PopoverTrigger>
<button  className="flex sm:text-xl text-md fixed bottom-10 right-10 space-x-4  z-10 items-center bg-custom-yellow text-white px-8 py-4  rounded-full font-Montserrat hover:border-none">
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1 27.6751C35.7562 26.0813 36.1125 24.3751 36.1125 22.5001C36.1125 21.1501 35.9062 19.8563 35.55 18.6563C34.3312 18.9376 33.0562 19.0876 31.725 19.0876C28.9987 19.0905 26.3116 18.4379 23.8904 17.1848C21.4691 15.9318 19.3846 14.115 17.8125 11.8876C16.1308 15.9566 12.9584 19.2297 8.94375 21.0376C8.86875 21.5063 8.86875 22.0126 8.86875 22.5001C8.86875 24.2901 9.22133 26.0627 9.90637 27.7165C10.5914 29.3703 11.5955 30.873 12.8612 32.1388C15.4176 34.6952 18.8848 36.1313 22.5 36.1313C24.4688 36.1313 26.3625 35.7 28.0688 34.9313C29.1375 36.975 29.625 37.9876 29.5875 37.9876C26.5125 39.0188 24.1313 39.5251 22.5 39.5251C17.9625 39.5251 13.6313 37.7438 10.4438 34.5375C8.505 32.6048 7.06382 30.2307 6.24375 27.6188H3.75V19.0876H5.79375C6.41295 16.0735 7.83655 13.2833 9.91348 11.013C11.9904 8.74275 14.6432 7.07707 17.5904 6.19272C20.5375 5.30838 23.6691 5.23837 26.6529 5.99013C29.6366 6.74188 32.3612 8.28735 34.5375 10.4626C36.9004 12.8162 38.5121 15.8177 39.1687 19.0876H41.25V27.6188H41.1375L34.4625 33.7501L24.525 32.625V29.4938H33.5812L35.1 27.6751ZM17.3813 22.0688C17.9438 22.0688 18.4875 22.2938 18.8812 22.7063C19.277 23.1052 19.499 23.6444 19.499 24.2063C19.499 24.7682 19.277 25.3074 18.8812 25.7063C18.4875 26.1001 17.9438 26.3251 17.3813 26.3251C16.2 26.3251 15.2438 25.3876 15.2438 24.2063C15.2438 23.0251 16.2 22.0688 17.3813 22.0688ZM27.6 22.0688C28.7812 22.0688 29.7188 23.0251 29.7188 24.2063C29.7188 25.3876 28.7812 26.3251 27.6 26.3251C26.4188 26.3251 25.4625 25.3876 25.4625 24.2063C25.4625 23.6394 25.6877 23.0957 26.0886 22.6949C26.4894 22.294 27.0331 22.0688 27.6 22.0688Z" fill="white"/>
</svg>
{!isOpen && <div>Need Help?</div>}
</button></PopoverTrigger>
<PopoverContent className= "bg-custom-light-yellow px-0 py-0 sm:w-auto w-full sm:h-auto h-screen shadow-5xl">
        <div className="sm:w-[400px] sm:h-[400px]  w-full h-full bg-custom-light-yellow px-0 py-0 flex flex-col items-center">
          <div className=" font-bold pt-4 text-xl">Chat with us</div>
          <div className="w-full px-4  font-Montserrat flex justify-start py-4 ">
            <div className="w-10/12 bg-white px-1 py-2 rounded-lg rounded-bl-none">Why are you selling your home?</div>
            </div>
            <div className="w-full px-4  font-Montserrat flex justify-end py-4 ">
            <div className="w-10/12 bg-white px-1 py-2 rounded-lg rounded-br-none">Upgrading to a new house</div>
            </div>
          <form className=" bottom-2 fixed w-full px-2">
            <input className="w-full rounded-md p-2 font-Montserrat" placeholder="Type Your Message" value={text} onChange={(e)=>setText(e.target.value)}></input>
          </form>
        </div>
      </PopoverContent></Popover>
    );
}