import { ObjectId } from "mongodb";
import { Address } from "./address";

export interface StoreLocation {
    _id: ObjectId;
    store_id: number;
    store_name: string;
    rating: number;
    phone: number;
    email: string;
    address: Address;
}
