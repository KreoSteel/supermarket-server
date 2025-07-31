import { ObjectId } from "mongodb";

export interface Customer {
    _id: ObjectId;
    first_name: string;
    last_name: string;
    loyalty_card_number: number;
    phone: number;
    email: string;
}