import { ObjectId } from "mongodb";
import { Address } from "./address";
import { Supplier } from "./suppliers";

export interface Inventory {
    _id: ObjectId;
    inventory_id: number;
    inventory_name: string;
    inventory_description: string;
    inventory_quantity: number;
    inventory_price: number;
    inventory_type: "product" | "service" | "raw_material";
    inventory_category: string;
    inventory_subcategory: string;
    inventory_supplier: Supplier;
    inventory_location: Address;
    inventory_reorder_point: number;
    inventory_reorder_quantity: number;
    inventory_reorder_date: number;
    inventory_reorder_cost: number;
    inventory_reorder_lead_time: number;
}