import { ObjectId } from "mongodb";

export interface LoyaltyProgram {
    _id: ObjectId;
    store_id: ObjectId;
    loyalty_program_id: number;
    name: string;
    description: string;
    points_per_dollar: number;
    expiration_date: Date;
}
