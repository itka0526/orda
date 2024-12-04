"use client";

import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type FloatingNavMenuProps = {
    handleGoBack: () => void;
    handleGoForward: () => void;
    handleOpen: () => void;
};

export function FloatingNavMenu({ handleGoBack, handleGoForward, handleOpen }: FloatingNavMenuProps) {
    const handleSearch = () => {
        handleOpen();
    };

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleGoBack} aria-label="Go back">
                <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleGoForward} aria-label="Go forward">
                <ArrowRight className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSearch} aria-label="Search">
                <Search className="h-6 w-6" />
            </Button>
        </div>
    );
}
