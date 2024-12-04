export type DishInfo = {
    weight: string;
    price: string;
    description: string;
    ingredients: string[];
    ETP: number;
};

export type DishName = string;
export type Dish = {
    [DishName: DishName]: DishInfo;
};
