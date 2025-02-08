import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroPage2() {
    return (
        <div className="">
            {/* 1st row */}
            <div className="bg-green">

                <div className="container pt-28 pb-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start text-darkBlue ">

                    {/* Text */}
                    <div className="flex flex-col sm:w-[509px] gap-[30px] p-[60px] ">

                        <div className="font-normal text-xl leading-[30px]" style={{ letterSpacing: "0.2px" }}><h1>SUMMER 2025</h1>
                        </div>
                        <div className="font-bold text-3xl md:text-5xl lg:text-[58px] lg:leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>Vita Classic Product</h1>
                        </div>

                        <div className="font-normal text-sm sm:w-[341px]" style={{ letterSpacing: "0.2px" }}> <h1>Style Your Home, Your Way</h1></div>

                        <div className="flex  gap-10 justify-center items-center lg:justify-start">
                            <h3 className="font-bold text-2xl" style={{ letterSpacing: "0.1px" }}> $16.48</h3>
                            <Button  >Shop Now</Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/sanity/4.jpg"}
                            alt="heropage-image"
                            width={400}
                            height={300}>
                            </Image>
                    </div>

                </div>


            </div>
        </div>
    )
}
