import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroPage() {
    return (
        <div>
            {/* Backgrounde Image */}
            <div className="relative bg-[url('/sanity/bg.jpg')] bg-cover bg-center bg-no-repeat h-[730px] ">
                <div className="flex gap-20 pt-[112px] pb-[112px]  ">

                    <div className="container relative   mx-auto  flex flex-col justify-center text-center items-center  text-white gap-[35px]   ">
                        <div className="flex flex-col gap-[35px] justify-center items-center">
                            <div>
                                <h5 className="  font-bold text-base  ">SUMMER 2025</h5>
                            </div>
                            <div>
                                <h2 className="font-bold text-[40px] md:text-[50px] lg:text-[58px]   leading-[50px] ">NEW COLLECTION</h2>
                            </div>
                            <div>
                                <h4 className=" flex font-normal text-xl leading-[30px] w-80  " style={{ letterSpacing: "0.2px" }}>{`"Modern Furniture for a Better Tomorrow Inspired Furniture for Inspired Living "`}</h4>
                            </div>
                            <div className=" flex justify-center items-center h-16 bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]">
                                <Link href={"/productPage"} >
                                <Button  variant={"shopButton"}>Shop Now</Button>
                                </Link>
                                
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}