import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="bg-white w-full h-auto  lg:h-[440px] justify-center items-center  gap-[87px] text-black ">
            {/* 1st Row  */}
            <div className="container  bg-dullWhite">
                <div className=" flex justify-center items-center flex-col gap-3  sm:flex-row sm:justify-between md:flex-row md:justify-between pt-10 pb-10 2xl:m-4 ">
                    <div className="font-bold text-2xl text-darkBlue ">
                        <h3>CozyWood Creations</h3>
                    </div>
                    <div className="flex gap-[20px] text-skyblue">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
                    </div>

                </div>
            </div>

            {/* 2nd Row */}
            <div className="container grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 justify-center items-center gap-[15px] pt-[50px] pb-[50px] ">

                {/* 1st column */}

                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-darkBlue">Company Info</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">About Us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Carrier</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">We are hiring</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Blog</Link>

                </div>

                {/* 2nd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-darkBlue">Legal</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">About Us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Carrier</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">We are hiring</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Blog</Link>

                </div>

                {/* 3rd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-darkBlue">Features</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Business Marketing</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">User Analytic</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Live Chat</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Unlimited Support</Link>
                </div>

                {/* 4th column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-darkBlue">Resources</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">IOS & Android</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Watch a Demo</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Customers</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">API</Link>

                </div>

                {/* 5th Column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-darkBlue">Get In Touch</h1>
                    <div className=" rounded-[5px] w-[318px] flex flex-col ">
                        <input type="email" placeholder="Your Email" className="bg-[#E6E6E6] h-[58px]  w-auto text-center" />
                        <button className="bg-skyblue text-white h-[58px] w-auto    border-[1px] rounded-[5px] ">Subscribe
                        </button>
                        </div>
                    <Link href={"/"} className=" text-sm leading-[24px] text-gray">Lore imp sum dolor Amit</Link>
                </div>
            </div>
        </div>
    )
}