import { ObjectId } from "mongodb";
import { Address } from "./address";

export interface Employee {
    _id: ObjectId;
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: "male" | "female";
    role: string;
    salary: number;
    department: string;
    employee_type: "full-time" | "part-time" | "seasonal";
    date_of_birth: number;
    phone: number;
    is_active: boolean;
    hire_date: number;
    home_address: Address;
    work_address: Address;
}