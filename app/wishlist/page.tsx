"use client";

import { urlFor } from "@/sanity/lib/image";
import { useWishlist } from "../context/wishlistContext";
import Image from "next/image"
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { CiHeart } from "react-icons/ci";
import { BsCartPlusFill } from "react-icons/bs";


// Define WishlistItem type (if not already defined)
interface WishlistItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  inventory: number,
};

export default function WishlistPage() {

  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: WishlistItem) => {
    const product = {
      _id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: 1,
      description: "",
      slug: { current: "" },
      inventory: item.inventory


    };
    addToCart(product); // Add item to the cart
    Swal.fire({
      title: `Do you want to add ${product.title} in your cart?`,
      showDenyButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: `${product.title} added successfully`,
          icon: "success",
        })
      }
      else if (result.isDenied) {
        Swal.fire(`${product.title} is not Add In Your Cart`);
      }
    });
  };

  return (
    <div className="container min-h-screen">
      <div className="container  mx-auto p-4">
        <h1 className=" container text-2xl font-bold text-darkBlue  mb-20 mt-20">Your Wishlist</h1>
        <div className="container p-5 ">

          {wishlist.length === 0 ? (
            <div className="container mt">
              <p className="container font-semibold text-red-600 flex justify-center items-center text-2xl mt-10 ">Your wishlist is empty.</p>
              <p className="container flex justify-center items-center text-xl font-bold text-gray"> Shop Now..</p>
            </div>

          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {wishlist.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow-md">
                  <Image
                    src={urlFor(item.imageUrl).url()}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p>{item.inventory}</p>
                  <div className="flex gap-4 ">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      <CiHeart size={24} />
                    </button>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 font-bold   text-white px-4 py-2 rounded  bg-yellow-500 hover:bg-yellow-400"
                    >
                      <BsCartPlusFill size={20} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div >

  );
}
