import { Category } from "./category.model";

export interface ProductModel {
    id: number;
    title: string;
    price: number;
    images: string[];
    creationAt: string;
    description: string;
    category: Category
}