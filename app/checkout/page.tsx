
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react";



export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [discount, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: ""
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false
  })

  useEffect(() => {
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, [])

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity,
    0)
  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }
  
  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email.includes("@"),
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error)
  }

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: 'Processing Your Order...',
      text: 'Please wait a moment',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',

      confirmButtonText: 'Proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount")
          Swal.fire(
            'Success!',
            'Your order has been successfully placed! ',
            'success'
          )
          
        } else {
          Swal.fire(
            'Error',
            'Please fill in all the fields before proceeding',
            'error'
          )
        }
      }
    })

    // Prepare the order data
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      email: formValues.email,
      phone: formValues.phone,
      cartItems: cartItems.map((item) => ({
        _type: 'reference',
        _ref: item._id,
      })),
      total: subTotal,
      discount: discount,
      status: 'pending',
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  }
  return (
    <div className="container min-h-screen mx-auto p-4 mb-14">
      <div className=" container mt-28 md:mt-20">
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
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart" className="text-black">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/checkout" className="text-black">Checkout</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>


      <h1 className="text-2xl font-bold mb-4 mt-10 text-darkBlue container ">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Cart Items */}
        <div>
          <h2 className=" container text-xl  mb-2 text-yellow-500 font-bold underline">Your Cart</h2>
          {cartItems.length === 0 ? (
            <div className=" mt-10 flex flex-col justify-center items-center gap-5 ">
              <p className="text-2xl "> Shipping Complete </p>
              <p className="">Your Cart is Empty Now</p>
              <div className=" flex justify-center items-center h-16 bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]">
                <Link href={"/productPage"} >
                  <Button variant={"shopButton"}>Shop Again </Button>
                </Link>
              </div>
            </div>

          ) : (
            <ul className="container ">
              {cartItems.map((item) => (
                <div key={item._id} className=" border shadow-md  p-5 mb-2">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row  gap-2 ">
                        <div className="image">
                          {item.imageUrl && (
                            <Image src={urlFor(item.imageUrl).url()}
                              alt={item.title}
                              width={50}
                              height={50}
                              className="object-cover">
                            </Image>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex  items-center  gap-2">
                            <p className="font-semibold text-xl "> Item :</p>
                            <span className=" font-semibold text-green "> {item.title}</span>
                          </div>
                          <div className="flex  items-center  gap-2">
                            <p className="font-semibold text-xl "> Quantity :</p>
                            <span className=" font-semibold text-green "> {item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex  items-center  gap-2">
                        <p className="font-semibold text-xl "> Price:</p>
                        <span className=" font-semibold text-green"> ${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Sub total  */}
              <div className=" flex flex-col  justify-end items-end border shadow-md  p-5 mb-2">
                <p className=" font-bold">
                  Sub Total : <span className=" font-semibold "> ${subTotal}</span>
                </p>
                <p className=" font-bold">
                  Discount : <span className=" font-semibold"> ${discount}</span>
                </p>
                <p className=" font-bold">
                  Total: <span className=" font-semibold">${subTotal.toFixed(2)}</span>
                </p>
              </div>
            </ul>
          )}
        </div>

        {/* Right Section: User Details & Summary */}
        <div className="container border shadow-md  p-5 mb-2">
          <h2 className="text-xl underline mb-2 font-bold text-yellow-500">Billing Details</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Fisrt Name</label>
              <input
                type="text"
                id="firstName"
                value={formValues.firstName}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your first name"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">
                  First Name is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your last name"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">
                  Last Name is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">
                  Email is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Phone</label>
              <input
                type="text"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your phone number"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">
                  Phone number is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Address</label>
              <input
                id="address"
                value={formValues.address}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your address"
              ></input>
              {formErrors.address && (
                <p className="text-red-500 text-sm">
                  Address is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">City</label>
              <input
                type="text"
                id="city"
                value={formValues.city}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your city"
              />
              {formErrors.city && (
                <p className="text-red-500 text-sm">
                  City is Required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChanges}
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your city zip code"
              />
              {formErrors.zipCode && (
                <p className="text-red-500 text-sm">
                  Zip Code is Required
                </p>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-2 text-yellow-500 underline">Order Summary</h2>
            <div>
              <p className="font-semibold text-xl ">Total Items: <span className="text-green ">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span></p>
              <p className="font-semibold text-xl ">
                Total Price:
                <span className="text-green "> ${cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}</span>

              </p>
            </div>

            <button
              type="submit"
              className="mt-4 ] text-white py-2 px-4  bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
