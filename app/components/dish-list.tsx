"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "@/lib/menu";
import { DishInfo, DishName } from "@/types/dish";
import { Trash } from "lucide-react";
import Image from "next/image";
import { MutableRefObject, useState } from "react";

type DishListProps = {
    searchRef: MutableRefObject<HTMLInputElement | null>;
    handleDishClick: (dn: DishName, di: DishInfo) => void;
};

export function DishList({ searchRef, handleDishClick }: DishListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="relative" onClick={() => searchRef.current?.focus()}>
                <Input
                    ref={searchRef}
                    type="search"
                    placeholder="#закуска, салаты, супы, горячие блюда, горячие блюда на компанию, гарниры и блюда из овощей, соусы, десерты"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                />
                <Button variant={"secondary"} className="absolute right-4 top-1/2 -translate-y-1/2 h-3/4" onClick={() => setSearchTerm("")}>
                    <Trash />
                </Button>
            </div>
            <ul className="space-y-6">
                {Object.entries(Menu)
                    .filter(([dn, di]) => {
                        const s = searchTerm.toLowerCase();
                        if (s.startsWith("#")) {
                            const t = di.tags;
                            return t?.some((tag) => tag.includes(s.slice(1)));
                        } else {
                            const n = dn.toLowerCase();
                            const d = di.description.toLowerCase();
                            return n.includes(s) || d.includes(s) || di.ingredients.some((ingredient) => ingredient.toLowerCase().startsWith(s));
                        }
                    })
                    .map(([name, info]) => (
                        <li
                            key={name}
                            className="flex items-center space-x-4 bg-card rounded-lg shadow-md overflow-hidden"
                            onClick={() => handleDishClick(name, info)}
                        >
                            <div className="w-24 h-24 relative flex-shrink-0">
                                <Image src={info.image ?? "/placeholder.svg"} alt={name} fill className="object-cover" />
                            </div>
                            <div className="flex-grow p-4">
                                <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                                <p className="text-sm text-muted-foreground">{info.description}</p>
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
}
