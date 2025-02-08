import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


// Inerface
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

export default async function BestSeller() {
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


    const featuredProducts = products.filter((product) => !product.isNew)
    console.log(featuredProducts);


    return (
        <div className=" flex flex-col gap-[30px]">

            {/* 1st Row */}
            <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                {featuredProducts.map((product) => (
                    <div key={product._id} className="flex flex-col items-center text-center border-[1px] rounded-md  shadow-md ">
                        {/* Image */}
                        <div className=" flex  flex-col justify-center items-center w-full h-[400px] rounded-sm">
                            <Image src={urlFor(product.imageUrl).url()}
                                alt={product.imageUrl}
                                width={300}
                                height={300}>
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
    )
}


