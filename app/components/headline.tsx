import * as React from "react"
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
export default function HeadLine() {
    return (
        <div>
            <div className=" hidden lg:flex lg:bg-darkBlue  lg:h-[58px]    lg:text-[#FFFFFF] justify-center text-center items-center">
                <div className="container flex justify-between  text-center items-center  text-sm leading-[24px]">
                    <div className="flex gap-[10px] h-[44px]">
                        <div className="flex justify-center items-center text-center gap-[5px] p-[10px]">
                            <FiPhone size={16} />
                            <span className="font-bold">(225) 555-0118</span>
                        </div>
                        <div className="flex justify-center items-center text-center gap-[5px] p-[10px]">
                            <TfiEmail size={16} />
                            <span className="font-bold">michelle.rivera@example.com</span>
                        </div>
                    </div>

                    <div className="font-bold" >
                        <p>Follow Us  and get a chance to win 80% off</p>
                    </div>

                    <div className="flex gap-[10px] p-[10px]">
                        <span className="font-bold">Follow Us  :</span>
                        <div className="flex gap-2">
                            <div className="w-[26px] h-[26px] p-[5px] gap-[10px]"><FaInstagram size={16} /></div>
                            <div className="w-[26px] h-[26px] p-[5px] gap-[10px]"><FaYoutube size={16} /></div>
                            <div className="w-[26px] h-[26px] p-[5px] gap-[10px]"><FaFacebook size={16} /></div>
                            <div className="w-[26px] h-[26px] p-[5px] gap-[10px]"><FaTwitter size={16} /></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}