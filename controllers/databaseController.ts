import { Request, Response } from "express";
import { databaseService } from "../services/databaseService";

export const databaseController = {
  // Addresses
  getAddresses: async (req: Request, res: Response) => {
    try {
      const addresses = await databaseService.addresses.getAll();
      res.json(addresses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch addresses" });
    }
  },

  getAddressById: async (req: Request, res: Response) => {
    try {
      const address = await databaseService.addresses.getById(req.params.id);
      if (!address) {
        return res.status(404).json({ error: "Address not found" });
      }
      res.json(address);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch address" });
    }
  },

  // Categories
  getCategories: async (req: Request, res: Response) => {
    try {
      const categories = await databaseService.categories.getAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  },

  getCategoryById: async (req: Request, res: Response) => {
    try {
      const category = await databaseService.categories.getById(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category" });
    }
  },

  // Customers
  getCustomers: async (req: Request, res: Response) => {
    try {
      const customers = await databaseService.customers.getAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch customers" });
    }
  },

  getCustomerById: async (req: Request, res: Response) => {
    try {
      const customer = await databaseService.customers.getById(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.json(customer);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch customer" });
    }
  },

  // Employees
  getEmployees: async (req: Request, res: Response) => {
    try {
      const employees = await databaseService.employees.getAll();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  },

  getEmployeeById: async (req: Request, res: Response) => {
    try {
      const employee = await databaseService.employees.getById(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch employee" });
    }
  },

  // Inventory
  getInventory: async (req: Request, res: Response) => {
    try {
      const inventory = await databaseService.inventory.getAll();
      res.json(inventory);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inventory" });
    }
  },

  getInventoryById: async (req: Request, res: Response) => {
    try {
      const inventoryItem = await databaseService.inventory.getById(req.params.id);
      if (!inventoryItem) {
        return res.status(404).json({ error: "Inventory item not found" });
      }
      res.json(inventoryItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inventory item" });
    }
  },

  // Loyalty Programs
  getLoyaltyPrograms: async (req: Request, res: Response) => {
    try {
      const loyaltyPrograms = await databaseService.loyaltyPrograms.getAll();
      res.json(loyaltyPrograms);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch loyalty programs" });
    }
  },

  getLoyaltyProgramById: async (req: Request, res: Response) => {
    try {
      const loyaltyProgram = await databaseService.loyaltyPrograms.getById(req.params.id);
      if (!loyaltyProgram) {
        return res.status(404).json({ error: "Loyalty program not found" });
      }
      res.json(loyaltyProgram);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch loyalty program" });
    }
  },

  // Orders
  getOrders: async (req: Request, res: Response) => {
    try {
      const orders = await databaseService.orders.getAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  },

  getOrderById: async (req: Request, res: Response) => {
    try {
      const order = await databaseService.orders.getById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch order" });
    }
  },

  // Customer Orders
  getCustomerOrders: async (req: Request, res: Response) => {
    try {
      const customerOrders = await databaseService.customerOrders.getAll();
      res.json(customerOrders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch customer orders" });
    }
  },

  getCustomerOrderById: async (req: Request, res: Response) => {
    try {
      const customerOrder = await databaseService.customerOrders.getById(req.params.id);
      if (!customerOrder) {
        return res.status(404).json({ error: "Customer order not found" });
      }
      res.json(customerOrder);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch customer order" });
    }
  },

  // Products
  getProducts: async (req: Request, res: Response) => {
    try {
      const products = await databaseService.products.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  },

  getProductById: async (req: Request, res: Response) => {
    try {
      const product = await databaseService.products.getById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  },

  // Store Locations
  getStoreLocations: async (req: Request, res: Response) => {
    try {
      const storeLocations = await databaseService.storeLocations.getAll();
      res.json(storeLocations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch store locations" });
    }
  },

  getStoreLocationById: async (req: Request, res: Response) => {
    try {
      const storeLocation = await databaseService.storeLocations.getById(req.params.id);
      if (!storeLocation) {
        return res.status(404).json({ error: "Store location not found" });
      }
      res.json(storeLocation);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch store location" });
    }
  },

  // Suppliers
  getSuppliers: async (req: Request, res: Response) => {
    try {
      const suppliers = await databaseService.suppliers.getAll();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch suppliers" });
    }
  },

  getSupplierById: async (req: Request, res: Response) => {
    try {
      const supplier = await databaseService.suppliers.getById(req.params.id);
      if (!supplier) {
        return res.status(404).json({ error: "Supplier not found" });
      }
      res.json(supplier);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch supplier" });
    }
  }
}; 