import { ObjectId } from "mongodb";

export interface Order {
    _id: ObjectId;
    customer_id: ObjectId;
    employee_id: ObjectId;
    order_date: Date;
    total_amount: number;
    status: "pending" | "completed" | "cancelled";
    payment_method: "cash" | "card";
    payment_status: "pending" | "completed" | "cancelled";
}