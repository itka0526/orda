"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Weight } from "lucide-react";
import { DishInfo, DishName } from "@/types/dish";

export function DishView({ dish: [dn, di] }: { dish: [DishName, DishInfo] }) {
    return (
        <div className="container mx-auto p-4 ">
            <Card className="min-h-[70vh]">
                <CardHeader>
                    <CardTitle>{dn}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Image src={di.image ?? "/logo.png"} alt={dn} height={512} width={512} className="object-cover max-w-full rounded-md " />
                        <div className="space-y-4 max-md:row-[1]">
                            <p className="text-muted-foreground">{di.description}</p>
                            <p className="text-2xl font-bold">{di.price}</p>
                            <div className="flex items-center space-x-2 text-muted-foreground">
                                <Clock className="h-5 w-5" />
                                <span>{di.ETP} минут</span>
                            </div>
                            <div className="flex items-center space-x-2 text-muted-foreground">
                                <Weight className="h-5 w-5" />
                                <span>{di.weight}</span>
                            </div>
                            <ul className="mt-2 space-y-1 text-sm">
                                {di.ingredients.map((ingredient, index) => (
                                    <li key={index} className="list-decimal ml-4">
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
