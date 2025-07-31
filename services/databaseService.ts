import { Address } from "../types/address";
import { Category } from "../types/category";
import { Customer } from "../types/customers";
import { Employee } from "../types/employees";
import { Inventory } from "../types/inventory";
import { LoyaltyProgram } from "../types/loyalty_programs";
import { Order } from "../types/orders";
import { OrderItem } from "../types/order_items";
import { Product } from "../types/products";
import { StoreLocation } from "../types/store_locations";
import { Supplier } from "../types/suppliers";
import { ObjectId } from "mongodb";
import db from "../utils/client";

export const databaseService = {
  addresses: {
    getAll: async (): Promise<Address[]> => {
      return await db.collection<Address>("addresses").find().toArray();
    },
    getById: async (id: string): Promise<Address | null> => {
      return await db.collection<Address>("addresses").findOne({ _id: new ObjectId(id) });
    }
  },

  categories: {
    getAll: async (): Promise<Category[]> => {
      return await db.collection<Category>("categories").find().toArray();
    },
    getById: async (id: string): Promise<Category | null> => {
      return await db.collection<Category>("categories").findOne({ _id: new ObjectId(id) });
    }
  },

  customers: {
    getAll: async (): Promise<Customer[]> => {
      return await db.collection<Customer>("customers").find().toArray();
    },
    getById: async (id: string): Promise<Customer | null> => {
      return await db.collection<Customer>("customers").findOne({ _id: new ObjectId(id) });
    }
  },

  employees: {
    getAll: async (): Promise<Employee[]> => {
      return await db.collection<Employee>("employees").find().toArray();
    },
    getById: async (id: string): Promise<Employee | null> => {
      return await db.collection<Employee>("employees").findOne({ _id: new ObjectId(id) });
    }
  },

  inventory: {
    getAll: async (): Promise<Inventory[]> => {
      return await db.collection<Inventory>("inventory").find().toArray();
    },
    getById: async (id: string): Promise<Inventory | null> => {
      return await db.collection<Inventory>("inventory").findOne({ _id: new ObjectId(id) });
    }
  },

  loyaltyPrograms: {
    getAll: async (): Promise<LoyaltyProgram[]> => {
      return await db.collection<LoyaltyProgram>("loyalty_programs").find().toArray();
    },
    getById: async (id: string): Promise<LoyaltyProgram | null> => {
      return await db.collection<LoyaltyProgram>("loyalty_programs").findOne({ _id: new ObjectId(id) });
    }
  },

  orders: {
    getAll: async (): Promise<Order[]> => {
      return await db.collection<Order>("orders").find().toArray();
    },
    getById: async (id: string): Promise<Order | null> => {
      return await db.collection<Order>("orders").findOne({ _id: new ObjectId(id) });
    }
  },

  customerOrders: {
    getAll: async (): Promise<OrderItem[]> => {
      return await db.collection<OrderItem>("customer_orders").find().toArray();
    },
    getById: async (id: string): Promise<OrderItem | null> => {
      return await db.collection<OrderItem>("customer_orders").findOne({ _id: new ObjectId(id) });
    }
  },

  products: {
    getAll: async (): Promise<Product[]> => {
      return await db.collection<Product>("products").find().toArray();
    },
    getById: async (id: string): Promise<Product | null> => {
      return await db.collection<Product>("products").findOne({ _id: new ObjectId(id) });
    }
  },

  storeLocations: {
    getAll: async (): Promise<StoreLocation[]> => {
      return await db.collection<StoreLocation>("store_locations").find().toArray();
    },
    getById: async (id: string): Promise<StoreLocation | null> => {
      return await db.collection<StoreLocation>("store_locations").findOne({ _id: new ObjectId(id) });
    }
  },

  suppliers: {
    getAll: async (): Promise<Supplier[]> => {
      return await db.collection<Supplier>("suppliers").find().toArray();
    },
    getById: async (id: string): Promise<Supplier | null> => {
      return await db.collection<Supplier>("suppliers").findOne({ _id: new ObjectId(id) });
    }
  }
}; 