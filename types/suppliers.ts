import { ObjectId } from "mongodb";
import { Address } from "./address";

export interface Supplier {
    _id: ObjectId;
    supplier_id: number;
    supplier_name: string;
    supplier_email: string;
    supplier_phone: number;
    supplier_address: Address;
    supplier_country: string;
    is_active: boolean;
    supplier_type: "manufacturer" | "distributor" | "wholesale";
    supplier_since: number;
    supplier_contact_person: string;
    supplier_contact_person_email: string;
    supplier_contact_person_phone: number;
    supplier_contact_person_address: Address;
}