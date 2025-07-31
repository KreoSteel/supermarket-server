import { ObjectId } from "mongodb";
import { OrderItem } from "./order_items";

export interface Order {
    _id: ObjectId;
    customer_id: ObjectId;
    employee_id: ObjectId;
    order_date: Date;
    order_items: OrderItem[];
    total_amount: number;
    status: "pending" | "completed" | "cancelled";
    payment_method: "cash" | "card";
    payment_status: "pending" | "completed" | "cancelled";
}