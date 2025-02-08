import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";



// Inerface
interface IProduct {
    quantity: number,
    inventory: number,
    title: string,
    price: number,
    tags: string[],
    discountPercentage: number,
    description: string,
    isNew: boolean,
    imageUrl: string,
    _id: string,
    slug: { current: string }
}

interface Props {
    params: {
        slug: string;
    };
}


export default async function CategoryPage({ params }: Props) {


    const { slug } = params;

    // category  query
   
    const query = `*[_type == "category" && slug.current == $slug][0] {
      name,
      "products": *[_type == "product" && references(^._id)]
      {
        title,
        imageUrl,
        price,
        slug,
      }
    }
  `;

    const category = await client.fetch(query, { slug })

    return (
        <div>
            {/* Road map */}
            <div className="container my-10 ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/productPage" className="text-black">Category</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Category */}
            <div className="container">
                <h1 className="text-3xl font-bold">Category :
                    <span className="text-darkBlue italic underline ">
                        {slug.toUpperCase()}
                    </span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {category.products.map((product: IProduct) => (
                        <div key={product.title} className="p-4 border rounded hover:scale-105 transition-transform ease-out duration-700 ">
                            <Link href={`/product/${product.slug.current}`}>
                                <Image
                                    src={urlFor(product.imageUrl).url()}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover" />
                            </Link>

                            <h2 className="text-2xl font-semibold mt-2">{product.title}</h2><p className="text-gray-700 mt-1">${product.price}</p>
                            <p className="text-lg font-semibold mt-2 line-clamp-2">{product.description}</p>

                            {/* View Details */}
                            <Link href={`/product/${product.slug.current}`}>
                                <button
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    View
                                </button>
                            </Link>
                        </div>
                    ))}
                </div >
            </div>
        </div>)
}


