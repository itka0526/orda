export type DishInfo = {
    weight: string;
    price: string;
    description: string;
    ingredients: string[];
    ETP: number;
    image?: string;
    tags?: string[];
};

export type DishName = string;
export type Dish = {
    [DishName: DishName]: DishInfo;
};
