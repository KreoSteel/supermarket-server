import { ObjectId } from "mongodb";

export interface Product {
    _id: ObjectId;
    product_id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    brand: string;
    expiration_date: Date;
    bar_code: number;
}