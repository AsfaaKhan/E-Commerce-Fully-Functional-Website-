import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wm32papl",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2023-01-01",
    token:"skLCnNKJKqn2jF55tgFY42dAmCPeGL4lqMYbNytkD6a99nlP60fWP9aJ1C64se5BcptXi43LFtlfPzSjkfkxe69T1eF0hfXkL1FWfMSbgOCmlSd7rNkCom1x6qUZrFd4tPwmdCgqvVdi85L9wEQeWTJk7XvG5hXsrkTq6otGJjYwdxBry5Qp",
    useCdn: true,
   
});