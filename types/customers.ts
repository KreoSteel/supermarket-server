import { ObjectId } from "mongodb";
import { Address } from "./address";

export interface Customer {
    _id: ObjectId;
    first_name: string;
    last_name: string;
    loyalty_card_number: number;
    phone: number;
    address: Address;
}