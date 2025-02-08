import Image from "next/image"
import { PiGreaterThan } from "react-icons/pi";

export default function Post() {
    return (
        <div>
            <div className="pt-20 pb-20 gap-20 b ">

                {/* Heading */}
                <div className="container flex flex-col justify-center items-center text-center gap-[10px]  ">
                    <h4 className="font-bold text-sm leading-[24px] text-skyblue " style={{ letterSpacing: "0.2px" }}>Practice Advice</h4>
                    <h3 className="font-bold text-[40px] leading-[50px]  text-darkBlue" style={{ letterSpacing: "0.1px" }}>Featured Posts</h3>
                    <p className="text-gray font-normal text-center text-sm " style={{ letterSpacing: "0.1px" }}>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics  </p>
                </div>


                {/* Cards */}

                <div className=" container flex flex-col items-center justify-center md:flex-row pt-20 pb-20  gap-[30px]">

                    {/* Card 1 */}
                    <div className="w-[300px]">
                        {/* Image */}
                        <div>
                            <Image src={"/images/p1.svg"}
                                alt="post"
                                width={300}
                                height={306}></Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px]  pb-[35px] pr-[18px] pl-[18px] gap-[10px] flex  flex-col">
                            <div className="gap-[15px] flex  text-gray font-normal text-xs " style={{ letterSpacing: "0.2px]" }}>
                                <h1 className="hover:text-skyblue">Google</h1>
                                <h1 className="hover:text-skyblue">Trending</h1>
                                <h1 className="hover:text-skyblue">New</h1>

                            </div>

                            <div className="font-normal text-darkBlue text-xl leading-[30px] " style={{ letterSpacing: "0.2px]" }} >
                                <h4>{`Loudest à la Madison #1 
                           (L'integral)`}</h4>
                            </div>

                            <div className="font-normal text-sm " style={{ letterSpacing: "0.2px]" }}>
                                <p>{`We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.`}</p>
                            </div>

                            <div className=" flex gap-[15px] pt-[15px] pb-[15px] ">
                                <Image src={"/images/Frame 1.svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                                <Image src={"/images/Frame 1 (1).svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                            </div>

                            <div className="flex gap-[10px] items-center ">
                                <h6 className="font-bold text-sm leading-[24px]  text-gray"  style={{ letterSpacing: "0.2px]" }}>Learn More</h6>
                                <PiGreaterThan className="text-skyblue " size={15}/>
                            </div>



                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="  w-[300px]">
                        {/* Image */}
                        <div>
                            <Image src={"/images/p2.svg"}
                                alt="post"
                                width={300}
                                height={306}></Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px]  pb-[35px] pr-[18px] pl-[18px] gap-[10px] flex  flex-col">
                            <div className="gap-[15px] flex  text-gray font-normal text-xs " style={{ letterSpacing: "0.2px]" }}>
                                <h1 className="hover:text-skyblue">Google</h1>
                                <h1 className="hover:text-skyblue">Trending</h1>
                                <h1 className="hover:text-skyblue">New</h1>

                            </div>

                            <div className="font-normal text-darkBlue text-xl leading-[30px] " style={{ letterSpacing: "0.2px]" }} >
                                <h4>{`Loudest à la Madison #1 
                           (L'integral)`}</h4>
                            </div>

                            <div className="font-normal text-sm " style={{ letterSpacing: "0.2px]" }}>
                                <p>{`We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.`}</p>
                            </div>

                            <div className=" flex  pt-[15px] pb-[15px] ">
                                <Image src={"/images/Frame 1.svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                                <Image src={"/images/Frame 1 (1).svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                            </div>

                            <div className="flex gap-[10px] items-center ">
                                <h6 className="font-bold text-sm leading-[24px]  text-gray"  style={{ letterSpacing: "0.2px]" }}>Learn More</h6>
                                <PiGreaterThan className="text-skyblue " size={15}/>
                            </div>



                        </div>
                    </div>

                    {/* Card3 */}
                    <div className=" w-[300px]">
                        {/* Image */}
                        <div>
                            <Image src={"/images/p3.svg"}
                                alt="post"
                                width={300}
                                height={306}></Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px]  pb-[35px] pr-[18px] pl-[18px] gap-[10px] flex  flex-col">
                            <div className="gap-[15px] flex  text-gray font-normal text-xs " style={{ letterSpacing: "0.2px]" }}>
                                <h1 className="hover:text-skyblue">Google</h1>
                                <h1 className="hover:text-skyblue">Trending</h1>
                                <h1 className="hover:text-skyblue">New</h1>

                            </div>

                            <div className="font-normal text-darkBlue text-xl leading-[30px] " style={{ letterSpacing: "0.2px]" }} >
                                <h4>{`Loudest à la Madison #1 
                           (L'integral)`}</h4>
                            </div>

                            <div className="font-normal text-sm " style={{ letterSpacing: "0.2px]" }}>
                                <p>{`We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.`}</p>
                            </div>

                            <div className=" flex pt-[15px] pb-[15px] ">
                                <Image src={"/images/Frame 1.svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                                <Image src={"/images/Frame 1 (1).svg"}
                                alt="time"
                                width={105}
                                height={16}></Image>
                            </div>

                            <div className="flex gap-[10px] items-center ">
                                <h6 className="font-bold text-sm leading-[24px]  text-gray"  style={{ letterSpacing: "0.2px]" }}>Learn More</h6>
                                <PiGreaterThan className="text-skyblue " size={15}/>
                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}