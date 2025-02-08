import { Slash } from "lucide-react"
import { LuPhone } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi"
import { TfiEmail } from "react-icons/tfi"
import { PiGreaterThanLight } from "react-icons/pi";
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function Price() {
    return (
        <div>
            <div className="pt-[80px] pb-[80px] gap-[96px]">
                <div className="container  gap-[36px1]
                    ">
                    {/* Heading */}
                    <div className="container pt-[80px] pb-[80px] flex flex-col justify-center items-center text-center gap-[10px]">
                        <p className="font-bold text-base  text-darkBlue" style={{ "letterSpacing": "0.1px" }}>PRICING </p>
                        <h3 className="font-bold text-[58px] leading-[80px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Simple Pricing</h3>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/productPage" className="text-black">Pricing</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>


                    <div className=" container pt-[80px] pb-[80px] flex flex-col justify-center items-center text-center  gap-[30px]">
                        <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>PRICING</h3>
                        <p className="font-bold text-base  text-darkBlue" style={{ "letterSpacing": "0.1px" }}> Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </p>

                        <Image src={"/images/switch.svg"}
                            alt="switch"
                            width={311}
                            height={44}>

                        </Image>
                    </div>
                </div>

                {/* Cards */}
                <div>
                    <div className="container grid grid-cols-1 lg:grid-cols-3 justify-center items-center text-center   ">
                        <div className="w-[327px ] h-[333px] bg-white flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <LuPhone size={72} className="text-skyblue" />
                            < p className="text-darkBlue font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className="text-darkBlue font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <Button variant={"submitButton"}>Submit Request</Button>
                        </div>

                        <div className="w-[327px ] h-[333px] bg-darkBlue flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <FiMapPin size={72} className="text-skyblue" />
                            < p className=" text-white  font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className=" text-white  font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <Button variant={"submitButton"}>Submit Request</Button>
                        </div>
                        <div className="w-[327px ] h-[333px] bg-white flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <TfiEmail size={72} className="text-skyblue" />
                            < p className="text-darkBlue font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className="text-darkBlue font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <Button variant={"submitButton"}>Submit Request</Button>
                        </div>
                    </div>
                </div>

                {/* Companies */}
                <div className="container pt-[80px] pb-[80px]">
                    <div className="bg-[#fafafa]">
                        <div className="flex flex-col justify-center items-center text-center gap-[10px]">
                            <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ letterSpacing: "0.2px" }}>Trusted By Over 4000 Big Companies</h3>

                        </div>

                        <div className="container pt-[50px] pb-[50px] gap-[30px]">
                            <div className="">
                                <div className="container pt-[50px] pb-[50px] gap-[30px] grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6  ">
                                    <Image src={"/productcard/11.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/12.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/13.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/14.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/15.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/16.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price FAQ */}
                <div className="container flex flex-col pt-20 pb-20 gap-[50px] ">
                    <div className=" flex flex-col justify-center items-center text-center gap-[10px]">
                        <p className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Pricing FAQs </p>
                        <h3 className="font-normal text-[20px] leading-[30px] text-gray" style={{ letterSpacing: "0.2px" }}>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</h3>
                    </div>

                    <div className="flex   flex-col md:flex-row">
                        {/* 1st Side */}
                        <div className="flex gap-[30px] flex-col rounded-[9px] p-[25px]">
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>Work better together</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>

                                </div>
                            </div>
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>Start working faster today</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>

                                </div>
                            </div>
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>OpenType features and 
                                    Variable fonts</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>

                                </div>
                            </div>
                        </div>

                        {/* 2nd Side */}
                        <div className="flex gap-[30px] flex-col rounded-[9px] p-[25px]">
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>Work at the speed of thought.</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>

                                </div>
                            </div>
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>The Fastest way to organize</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>

                                </div>
                            </div>
                            <div className=" flex gap-20 ">
                                <div className="text-skyblue">
                                    <PiGreaterThanLight />
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h5 className="text-base  text-darkBlue font-bold" style={{ letterSpacing: "0.1px" }}>The Fastest way to navigate</h5>
                                    <p className="font-normal text-gray text-sm " style={{ letterSpacing: "0.2px" }}>Met minim Mollie non desert Alamo est sit cliquey
                                        dolor do met sent. RELIT official consequent door ENIM
                                        RELIT Mollie. Excitation venial consequent sent
                                        nostrum met.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-normal text-center text-xl leading-[30px]" style={{ letterSpacing: "0.2px" }}>
                            {` Haven’t got your answer?`} <Link href={"/contact"}> <span className="underline">Contact</span> </Link> our support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}