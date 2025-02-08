import Image from "next/image"
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "@/components/ui/button";
export default function Contact() {
    return (
        <div>
            <div>
                {/* Hero Page */}
                <div className="bg-white">

                    <div className="container pt-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start ">

                        {/* Text */}
                        <div className="flex flex-col   pt-28 pb-28  sm:w-[509px] gap-[35px] p-[60px] ">

                            <div className="font-bold text-base text-darkBlue" style={{ letterSpacing: "0.1px" }}><h1>CONTACT US</h1></div>
                            <div className="font-bold  text-darkBlue text-[58px] leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>Get in touch
                                today!</h1></div>

                            <div className="font-normal text-xl leading-[30px] sm:w-[341px] text-gray" style={{ letterSpacing: "0.2px" }}> <h1>We know how large objects will act,
                                but things on a small scale</h1></div>

                            <div className="flex flex-col gap-[5px]">
                                <div className="font-bold text-2xl text-darkBlue" style={{ letterSpacing: "0.1px" }}><h1>Phone ; +451 215 215 </h1></div>
                                <div className="font-bold text-2xl text-darkBlue" style={{ letterSpacing: "0.1px" }}><h1>Fax : +451 215 215</h1></div>
                            </div>

                        </div>

                        {/* Image */}
                        <div>
                            <Image src={"/about/2.svg"}
                                alt="heropage-image"
                                width={510}
                                height={684}></Image>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    {/* Heading */}
                    <div className="flex pt-[112px] pb-[112px] gap-[80px] flex-col justify-center items-center text-center">
                        <h3 className="font-bold text-sm leading-[24px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>VISIT OUR OFFICE</h3>
                        <p className="font-bold text-[40px]  text-darkBlue" style={{ "letterSpacing": "0.2px" }}>We help small businesses
                            with big ideas</p>

                    </div>

                    {/* Cards */}
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

                {/* End */}

                <div className="pt-[80px] pb-[80px] gap-[96px]">
                    <div className="container  gap-[36px1]
                    ">
                        {/* Heading */}
                        <div className="flex flex-col justify-center items-center text-center gap-[10px]">
                            <p className="font-bold text-base  text-darkBlue" style={{ "letterSpacing": "0.1px" }}>{`WE Can't WAIT TO MEET YOU `}</p>
                            <h3 className="font-bold text-[58px] leading-[80px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>{`Let’s Talk`}</h3>
                            <Button variant={"submitButton"}>Submit Request</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}