"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";



interface WishlistItem {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    inventory : number;
}

interface WishlistContextType {
  
    wishlist: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
    undefined
);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    const addToWishlist = (item: WishlistItem) => {
        setWishlist((prev) => {
            if (prev.some((wishlistItem) => wishlistItem.id === item.id)) {
                return prev; // Avoid duplicates
            }
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id: string) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist,  removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext,);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
