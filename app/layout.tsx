import { Metadata } from "next"
import "./globals.css";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header";
import HeadLine from "./components/headline";
import { WishlistProvider } from "./context/wishlistContext";
import { ClerkProvider } from "@clerk/nextjs"


export const metadate: Metadata = {
  title: "CozyWood Creation - Admin Dashboard",
  description: "Admin dashboard to manage CozyWood Creation website"
}

export default function RootLayout(
  { children, }
    : Readonly<
      { children: React.ReactNode }>) {

  {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <HeadLine />
            <WishlistProvider>
              <CartProvider>
                <Header />
                {children}
                <Footer />
              </CartProvider>
            </WishlistProvider>
          </body>
        </html>
      </ClerkProvider>
    )
  }
}

