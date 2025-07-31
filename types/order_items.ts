import { ObjectId } from "mongodb";

export interface OrderItem {
    _id: ObjectId;
    order_id: ObjectId;
    product_id: ObjectId;
    order_date: Date;
    quantity: number;
    price_per_unit: number;
    discount: number;
    tax: number;
    total_price: number;
}