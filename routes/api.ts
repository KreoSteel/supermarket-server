import { Router } from "express";
import { databaseController } from "../controllers/databaseController";

const router = Router();

// Dynamic routes for all collections
const collections = [
  { name: 'addresses', controller: databaseController.getAddresses, controllerById: databaseController.getAddressById },
  { name: 'categories', controller: databaseController.getCategories, controllerById: databaseController.getCategoryById },
  { name: 'customers', controller: databaseController.getCustomers, controllerById: databaseController.getCustomerById },
  { name: 'employees', controller: databaseController.getEmployees, controllerById: databaseController.getEmployeeById },
  { name: 'inventory', controller: databaseController.getInventory, controllerById: databaseController.getInventoryById },
  { name: 'loyalty-programs', controller: databaseController.getLoyaltyPrograms, controllerById: databaseController.getLoyaltyProgramById },
  { name: 'orders', controller: databaseController.getOrders, controllerById: databaseController.getOrderById },
  { name: 'customer-orders', controller: databaseController.getCustomerOrders, controllerById: databaseController.getCustomerOrderById },
  { name: 'products', controller: databaseController.getProducts, controllerById: databaseController.getProductById },
  { name: 'store-locations', controller: databaseController.getStoreLocations, controllerById: databaseController.getStoreLocationById },
  { name: 'suppliers', controller: databaseController.getSuppliers, controllerById: databaseController.getSupplierById }
];

// Generate routes for each collection
collections.forEach(collection => {
  // GET all items in collection
  router.get(`/${collection.name}`, collection.controller);
  
  // GET item by ID in collection
  router.get(`/${collection.name}/:id`, collection.controllerById);
});

export default router; 