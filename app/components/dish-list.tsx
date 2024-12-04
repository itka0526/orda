"use client";

import { Input } from "@/components/ui/input";
import { Menu } from "@/lib/menu";
import { DishInfo, DishName } from "@/types/dish";
import Image from "next/image";
import { useState } from "react";

type DishListProps = {
    open: boolean;
    handleDishClick: (dn: DishName, di: DishInfo) => void;
};

export function DishList({ open, handleDishClick }: DishListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            {open && (
                <Input type="search" placeholder="Искать..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mb-4" />
            )}
            <ul className="space-y-6">
                {Object.entries(Menu)
                    .filter(([dn, di]) => {
                        return (
                            dn
                                .toLowerCase()
                                .split(" ")
                                .some((k) => k.startsWith(searchTerm.toLowerCase())) ||
                            di.ingredients.some((ingredient) => ingredient.toLowerCase().startsWith(searchTerm.toLowerCase()))
                        );
                    })
                    .map(([name, info]) => (
                        <li
                            key={name}
                            className="flex items-center space-x-4 bg-card rounded-lg shadow-md overflow-hidden"
                            onClick={() => handleDishClick(name, info)}
                        >
                            <div className="w-24 h-24 relative flex-shrink-0">
                                <Image src={"/placeholder.svg"} alt={name} fill className="object-cover" />
                            </div>
                            <div className="flex-grow p-4">
                                <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                                <p className="text-sm text-muted-foreground">{info.description}</p>
                                <p className="text-sm font-medium text-primary mt-2">{info.price}</p>
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
}
