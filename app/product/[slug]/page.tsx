"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import RelatedProducts from "@/app/components/relatedProduct";
import Footer from "@/app/components/footer";
import Swal from "sweetalert2";
import { useWishlist } from "@/app/context/wishlistContext";
import { Product } from "@/types/product";
import { BsCartPlusFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";


interface Props {
    params: { slug: string };
}


export default function ProductDetailPage({ params }: Props) {
    const { slug } = params;
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    useEffect(() => {
        const fetchProduct = async () => {
            const query = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]{
                title,
                description,
                discountPercentage,
                price,
                imageUrl,
                slug,
                isNew,
                _id,
          
              }`);
            setProduct(query);
        }
        fetchProduct()
    }, [slug])

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            iconColor: 'green',
            customClass: {
                popup: 'colored',
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: false,

        });
        (async () => {
            await Toast.fire({
                icon: 'success',
                title: 'Add to cart Successfully',
            })
        })()
    };


    // WISHLIST HANDLER
    const handleWishlistToggle = (product: Product) => {
        if (wishlist.some((item) => item.id === product._id)) {
            removeFromWishlist(product._id);
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                iconColor: 'red',
                customClass: {
                    popup: 'colored',
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,

            }); (async () => {
                await Toast.fire({
                    icon: 'error',
                    title: 'Remove From Wishlist',
                })
            })()
        } else {
            addToWishlist({
                id: product._id,
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                inventory: product.inventory
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                iconColor: 'green',
                customClass: {
                    popup: 'colored',
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,

            });
            (async () => {
                await Toast.fire({
                    icon: 'success',
                    title: 'Add to wishlist Successfully',
                })
            })()

        }
    };


    if (!product) {
        return <div className="container  ">
            <h1 className=" h-screen flex flex-col  justify-center items-center font-bold text-4xl ">Product Not Found</h1>
            <Footer />
        </div>;
    }
    {
        const isInWishlist = wishlist.some((item) => item.id === product._id);

        return (
            <div>

                {/* First Section */}
                <div>
                    <div className="bg-[#FAFAFA]
                ">
                        <div className="container pt-6 pb-6 ">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        <Slash />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/productPage" className="text-black">Shop</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="container mt-5 ">
                        <div className=" pb-12 flex gap-[30px] flex-col  md:flex-row ">
                            <div className="md:w-1/2">

                                <Image src={urlFor(product.imageUrl).url()}
                                    alt={product.title}
                                    width={506}
                                    height={450}></Image>
                            </div>

                            <div className=" md:w-1/2 flex flex-col gap-[10px]">
                                <div>
                                    <h1 className="text-darkBlue font-bold text-2xl leading-[30px] " style={{ letterSpacing: "0.2px" }}>{product.title} </h1>
                                </div>
                                <div className="flex gap-[10px] ">
                                    <Image src={"/sellerproduct/stars.svg"}
                                        alt="star"
                                        width={130}
                                        height={20}>

                                    </Image>
                                    <p className="text-gray font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>{product.discountPercentage}% Discount</p>
                                </div>
                                <div>
                                    <h1 className="text-darkBlue font-bold text-xl leading-[32px] " style={{ letterSpacing: "0.1px" }}>${product.price}</h1>
                                </div>
                                <div className="flex gap-[5px]  font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>
                                    <h6 className="text-gray">Availability:{product.isNew} </h6>
                                    <h6 className="text-skyblue">In Stock </h6>
                                </div>
                                <div>
                                    <p className="  font-normal text-sm leading-[20px] text-gray " style={{ letterSpacing: "0.2px" }} >{product.description}</p>
                                </div>
                                <div className="border   border-gray mt-6 mb-6 "></div>
                                <div className="pt-5 pb-5">
                                    <Image src={"/sellerproduct/product-colors.svg"}
                                        alt="colour"
                                        width={150}
                                        height={30}></Image>
                                </div>

                                <div className="flex  gap-[5px]">
                                    <div className="flex gap-5">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded"
                                        >
                                            <BsCartPlusFill size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleWishlistToggle(product)}
                                            className={`mt-2 px-4 py-2 rounded ${isInWishlist
                                                ? "bg-red-500 text-black hover:bg-red-600"
                                                : "bg-yellow-500 hover:bg-yellow-400 text-white"
                                                }`}
                                        >
                                            {isInWishlist ? <CiHeart size={24} /> : <CiHeart size={24} />}
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center text-center gap-[10px]">
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-dullWhite ">
                    <RelatedProducts />
                </div>

            </div>
        )
    }
}

