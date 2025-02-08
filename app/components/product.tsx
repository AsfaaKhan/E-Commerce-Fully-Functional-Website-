import Image from "next/image"

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface IProduct {
    title: string,
    price: number,
    tags: string[],
    discountPercentage: number,
    description: string,
    isNew: boolean,
    imageUrl: string,
    _id: number
}

export default async function Product() {
    const response = await client.fetch(`*[_type == "product"]{
        title,
        price ,
        tags,
        discountPercentage,
        description,
        isNew,
        imageUrl,
        _id
   }`)

    const products: IProduct[] = response
    console.log(products);

    const newArrivals = products.filter((product) => product.isNew)
    console.log(newArrivals);

    return (
        <div>
            <div className="pt-20 pb-20 gap-20 ">

                {/* Heading */}
                <div className="flex flex-col justify-center items-center text-center gap-[10px]  ">
                    <h4 className="font-normal text-xl  leading-[30px] text-gray " style={{ letterSpacing: "0.2px" }}>Featured Products</h4>
                    <h3 className="font-bold text-2xl text-darkBlue" style={{ letterSpacing: "0.1px" }}>BESTSELLER PRODUCTS</h3>
                </div>

                {/*  Image Cards */}
                <div className="container flex flex-col  mt-20 mb-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                        {products.map((product) => (
                            <div key={product._id} className="flex flex-col items-center text-center border-[1px] rounded-md  shadow-md ">
                                {/* Image */}
                                <div className=" flex  flex-col justify-center items-center w-full h-[400px] rounded-sm">
                                    <Image src={urlFor(product.imageUrl).url()}
                                        alt={product.imageUrl}
                                        width={239}
                                        height={427}>
                                    </Image>
                                </div>
                                {/* Text */}
                                <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                                    <div >
                                        <h5 className="text-darkBlue font-bold text-base " style={{ letterSpacing: "0.1px" }} >{product.title}</h5>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm text-gray line-clamp-1 " style={{ letterSpacing: "0.2px" }} >{product.description} </h5>
                                    </div>

                                    <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                        <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >${product.price}</h5>
                                    </div>

                                    <div>
                                        <Image src={"/images/product-colors.svg"}
                                            alt="product "
                                            width={82}
                                            height={16}>
                                        </Image>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}