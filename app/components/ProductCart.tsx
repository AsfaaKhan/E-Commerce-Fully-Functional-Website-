"use client";

import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/wishlistContext";
import { CiHeart } from "react-icons/ci";
import Skeleton from 'react-loading-skeleton'
import Swal from "sweetalert2"
import { BsCartPlusFill } from "react-icons/bs";

const ProductPage = () => {

  const [product, setProduct] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const { addToCart } = useCart(); // Get the Add to Cart function from the context
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();



  // ADD TO CART HANDLER
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
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

    addToCart(product);
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

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      const fetchedProduct: Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
      setLoading(false)
    }
    fetchProduct()
  }, [])


  const Loading = () => {
    return (
      <div className=" mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <Skeleton height={350} width={300} className="w-full" />
          </div>
        ))}
      </div>
    )
  }

  const Products = () => {
    return (
      <div>

        <div className=" mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
          {product.map((product) => {

            const isInWishlist = wishlist.some((item) => item.id === product._id);
            return (
              <div key={product._id}
                className="flex flex-col justify-center border-[1px] rounded-md shadow-md h-[600px] w-full gap-20 hover:scale-105 transition-transform ease-out duration-700"
              >
                {/* Product Image */}
                <div className=" flex justify-center items-center w-full h-[200px] rounded-sm">
                  <Link href={`/product/${product.slug.current}`}>
                    <div className=" flex justify-center items-center w-full h-[200px] rounded-sm">
                      <Image
                        src={urlFor(product.imageUrl).url()}
                        alt={product.title}
                        width={200}
                        height={200}
                      />
                    </div>
                  </Link>
                </div>

                {/* Product Details */}
                <div className="flex flex-col text-center items-center justify-center">
                  <h5 className="text-darkBlue font-bold text-base">
                    {product.title}
                  </h5>
                  <p className="font-medium text-sm text-gray line-clamp-1">
                    {product.description}
                  </p>
                  <h5 className="text-green font-bold text-base">${product.price}</h5>
                  <span className="text-red-400">
                    {product.inventory} items in stock
                  </span>

                  <div className="flex justify-between gap-5 ">
                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="mt-2 font-bold text-white px-4 py-2 rounded  bg-yellow-500 hover:bg-yellow-400  hover:scale-110 transition-transform duration-200 ease-in-out"
                    >
                      <BsCartPlusFill  size={20}/>

                    </button>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => handleWishlistToggle(product)}
                      className={`mt-2 px-4 py-2 rounded ${isInWishlist
                        ? "bg-red-500 text-black hover:bg-red-600"
                        : "bg-yellow-500 hover:bg-yellow-400 text-white "
                        }`}
                    >
                      {isInWishlist ? <CiHeart size={24} /> : <CiHeart size={24} />}
                    </button>
                  </div>

                  {/* View Details */}
                  <Link href={`/product/${product.slug.current}`}>
                    <button
                      className="mt-2 bg-darkBlue text-white px-4 py-2 rounded hover:bg-blue-900"
                    >
                      View More...
                    </button>
                  </Link>

                </div>
              </div>
            )
          }
          )}
        </div>
      </div>

    )
  }

  return (
    <div>
      <div className="container ">
        {loading ? <Loading /> : <Products />}
      </div>
    </div>
  )
}
export default ProductPage