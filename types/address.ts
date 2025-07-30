import { ObjectId } from "mongodb";

export interface Address {
    _id: ObjectId;
    street: string;
    city: string;
    state: string;
    zip: number;
}