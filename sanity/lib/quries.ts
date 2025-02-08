import { groq } from "next-sanity";
import { client } from "./client";


export const allProducts = groq`*[_type == "product"]`
export const relatedProducts = groq`*[_type == "product"][10..18]`
export const sixProducts = groq`*[_type == "product"][0..5]`

// User Data

export async function getUser(clerkId: string) {
    return await client.fetch(`*[_type == "user" && clerkId == $clerkId][0]`, { clerkId });
  }



