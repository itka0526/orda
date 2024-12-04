"use client";

import { FloatingNavMenu } from "@/components/floating-nav-menu";
import { useState } from "react";
import { DishList } from "./dish-list";
import { DishInfo, DishName } from "@/types/dish";
import { DishView } from "./dish-view";

export function PageHandler() {
    const [page, setPage] = useState(2);

    const handleGoBack = () => {
        setPage((p) => (p + 1 >= 3 ? p : p + 1));
    };

    const handleGoForward = () => {
        setPage((p) => (p - 1 <= -1 ? p : p - 1));
    };

    const [dish, setDish] = useState<[DishName, DishInfo] | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleDishClick = (dn: DishName, di: DishInfo) => {
        setDish([dn, di]);
        handleGoForward();
    };

    const handleOpen = () => {
        setOpen((p) => !p);
    };

    return (
        <main className={`grid min-h-screen grid-cols-[100vw] overflow-hidden`}>
            <div className="w-full h-full relative">
                <div
                    className="h-full w-full absolute transition-transform translate-x-[0%] overflow-y-scroll"
                    style={{
                        transform: `translateX(${(page - 2) * 100}%)`,
                    }}
                >
                    <div className="container mx-auto p-4">
                        <DishList open={open} handleDishClick={handleDishClick} />
                    </div>
                </div>
                <div
                    className="h-full w-full absolute transition-transform  "
                    style={{
                        transform: `translateX(${(page - 1) * 100}%)`,
                    }}
                >
                    {dish && <DishView dish={dish} />}
                </div>
            </div>
            <FloatingNavMenu handleGoBack={handleGoBack} handleGoForward={handleGoForward} handleOpen={handleOpen} />
        </main>
    );
}
