"use client";

import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type FloatingNavMenuProps = {
    handleGoBack: () => void;
    handleGoForward: () => void;
    handleManual: (n: number) => void;
    focusSearch: () => void;
};

export function FloatingNavMenu({ handleGoBack, handleGoForward, handleManual, focusSearch }: FloatingNavMenuProps) {
    const handleSearch = () => {
        handleManual(2);
        focusSearch();
    };

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleGoBack} aria-label="Go back" className="rounded-full">
                <ArrowLeft className="h-16 w-1h-16" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleGoForward} aria-label="Go forward" className="rounded-full">
                <ArrowRight className="h-16 w-1h-16" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSearch} aria-label="Search" className="rounded-full">
                <Search className="h-16 w-1h-16" />
            </Button>
        </div>
    );
}
