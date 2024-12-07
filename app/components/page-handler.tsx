"use client";

import { FloatingNavMenu } from "@/components/floating-nav-menu";
import { useRef, useState } from "react";
import { DishList } from "./dish-list";
import { DishInfo, DishName } from "@/types/dish";
import { DishView } from "./dish-view";

export function PageHandler() {
    const [page, setPage] = useState(2);

    const handleGoBack = () => {
        if (dish)
            setDish((p) => {
                if (p) p[1].image = undefined;
                return p;
            });
        setPage((p) => {
            return p + 1 >= 3 ? p : p + 1;
        });
    };

    const handleGoForward = () => {
        if (!dish) return;
        setPage((p) => (p - 1 <= 0 ? p : p - 1));
    };

    const [dish, setDish] = useState<[DishName, DishInfo] | null>(null);

    const handleDishClick = (dn: DishName, di: DishInfo) => {
        setDish([dn, di]);
        handleGoForward();
    };

    const handleManual = (n: number) => {
        setPage(n);
    };

    const focusSearch = () => {
        divRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        searchRef.current?.focus();
    };

    const divRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);

    return (
        <main className={`grid min-h-screen grid-cols-[100vw] overflow-hidden`}>
            <div className="w-full h-full relative">
                <div
                    className="h-full w-full absolute transition-transform translate-x-[0%] overflow-y-scroll"
                    ref={divRef}
                    style={{
                        transform: `translateX(${(page - 2) * 100}%)`,
                    }}
                >
                    <div className="container mx-auto p-4">
                        <DishList searchRef={searchRef} handleDishClick={handleDishClick} />
                    </div>
                </div>
                <div
                    className="h-full w-full absolute transition-transform overflow-y-auto"
                    style={{
                        transform: `translateX(${(page - 1) * 100}%)`,
                    }}
                >
                    {dish && <DishView dish={dish} />}
                </div>
            </div>
            <FloatingNavMenu handleGoBack={handleGoBack} handleGoForward={handleGoForward} handleManual={handleManual} focusSearch={focusSearch} />
        </main>
    );
}
