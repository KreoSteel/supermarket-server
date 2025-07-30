import { ObjectId } from "mongodb";

export interface CustomerOrder {
    _id: ObjectId;
    customer_id: ObjectId;
    employee_id: ObjectId;
    order_date: Date;
    quantity: number;
    price_per_unit: number;
    discount: number;
    tax: number;
    total_price: number;
}