# ObjectId Relationships Verification

## ✅ **All ObjectIds Are Properly Matched!**

Here's a complete mapping of how ObjectIds are connected across collections:

## 🏠 **Addresses (Base Collection)**
- `507f1f77bcf86cd799439011` - Main Office (123 Main Street, New York)
- `507f1f77bcf86cd799439012` - Warehouse (456 Oak Avenue, Los Angeles)
- `507f1f77bcf86cd799439013` - Distribution Center (789 Pine Road, Chicago)
- `507f1f77bcf86cd799439014` - Headquarters (321 Elm Street, Houston)
- `507f1f77bcf86cd799439015` - Retail Store (654 Maple Drive, Phoenix)

## 🏠 **Employee Home Addresses (Embedded)**
- `507f1f77bcf86cd799439021` - Alice Johnson Home (789 Home Street, New York)
- `507f1f77bcf86cd799439022` - Bob Smith Home (456 Home Avenue, Los Angeles)
- `507f1f77bcf86cd799439023` - Carol Davis Home (321 Home Road, Chicago)
- `507f1f77bcf86cd799439024` - David Wilson Home (654 Home Drive, Houston)
- `507f1f77bcf86cd799439025` - Eva Brown Home (987 Home Lane, Phoenix)

## 🔗 **Address References**
✅ **Address 011** is referenced by:
- `suppliers.json` - Fresh Dairy Co. (supplier_address & supplier_contact_person_address)
- `employees.json` - Alice Johnson (work_address)
- `store_locations.json` - Downtown Supermarket (address)
- `inventory.json` - Organic Whole Milk (inventory_location)

✅ **Address 012** is referenced by:
- `suppliers.json` - Organic Farms Inc. (supplier_address & supplier_contact_person_address)
- `employees.json` - Bob Smith (work_address)
- `store_locations.json` - Westside Market (address)
- `inventory.json` - Whole Wheat Bread (inventory_location)

✅ **Address 013** is referenced by:
- `suppliers.json` - Global Distributors (supplier_address & supplier_contact_person_address)
- `employees.json` - Carol Davis (work_address)
- `store_locations.json` - Central Grocery (address)

✅ **Address 014** is referenced by:
- `suppliers.json` - Premium Meats Ltd. (supplier_address & supplier_contact_person_address)
- `employees.json` - David Wilson (work_address)

✅ **Address 015** is referenced by:
- `suppliers.json` - Bulk Wholesale Co. (supplier_address & supplier_contact_person_address)
- `employees.json` - Eva Brown (work_address)

## 👥 **Customer References**
✅ **Customer 051** (Frank Miller) is referenced by:
- `orders.json` - Order 0a1 (customer_id)
- `customer_orders.json` - Order Item 0b1 (customer_id - removed in new structure)

✅ **Customer 052** (Grace Taylor) is referenced by:
- `orders.json` - Order 0a2 (customer_id)
- `customer_orders.json` - Order Item 0b2 (customer_id - removed in new structure)

✅ **Customer 053** (Henry Anderson) is referenced by:
- `orders.json` - Order 0a3 (customer_id)
- `customer_orders.json` - Order Item 0b3 (customer_id - removed in new structure)

✅ **Customer 054** (Ivy Thomas) is referenced by:
- `orders.json` - Order 0a4 (customer_id)
- `customer_orders.json` - Order Item 0b4 (customer_id - removed in new structure)

✅ **Customer 055** (Jack Jackson) is referenced by:
- `orders.json` - Order 0a5 (customer_id)
- `customer_orders.json` - Order Item 0b5 (customer_id - removed in new structure)

## 👨‍💼 **Employee References**
✅ **Employee 041** (Alice Johnson) is referenced by:
- `orders.json` - Order 0a1 (employee_id)
- `customer_orders.json` - Order Item 0b1 (employee_id - removed in new structure)

✅ **Employee 042** (Bob Smith) is referenced by:
- `orders.json` - Order 0a2 (employee_id)
- `customer_orders.json` - Order Item 0b2 (employee_id - removed in new structure)

✅ **Employee 043** (Carol Davis) is referenced by:
- `orders.json` - Order 0a3 (employee_id)
- `customer_orders.json` - Order Item 0b3 (employee_id - removed in new structure)

✅ **Employee 044** (David Wilson) is referenced by:
- `orders.json` - Order 0a4 (employee_id)
- `customer_orders.json` - Order Item 0b4 (employee_id - removed in new structure)

✅ **Employee 045** (Eva Brown) is referenced by:
- `orders.json` - Order 0a5 (employee_id)
- `customer_orders.json` - Order Item 0b5 (employee_id - removed in new structure)

## 📦 **Product References**
✅ **Product 061** (Organic Whole Milk) is referenced by:
- `orders.json` - Order 0a1, Order Item 0b1 (product_id)
- `customer_orders.json` - Order Item 0b1 (product_id)

✅ **Product 062** (Whole Wheat Bread) is referenced by:
- `orders.json` - Order 0a2, Order Item 0b2 (product_id)
- `customer_orders.json` - Order Item 0b2 (product_id)

✅ **Product 064** (Premium Ground Beef) is referenced by:
- `orders.json` - Order 0a3, Order Item 0b3 (product_id)
- `customer_orders.json` - Order Item 0b3 (product_id)

✅ **Product 067** (Frozen Pizza) is referenced by:
- `orders.json` - Order 0a4, Order Item 0b4 (product_id)
- `customer_orders.json` - Order Item 0b4 (product_id)

✅ **Product 065** (Sparkling Water) is referenced by:
- `orders.json` - Order 0a5, Order Item 0b5 (product_id)
- `customer_orders.json` - Order Item 0b5 (product_id)

## 📋 **Order References**
✅ **Order 0a1** is referenced by:
- `orders.json` - Order 0a1 (_id)
- `orders.json` - Order 0a1, Order Item 0b1 (order_id)
- `customer_orders.json` - Order Item 0b1 (order_id)

✅ **Order 0a2** is referenced by:
- `orders.json` - Order 0a2 (_id)
- `orders.json` - Order 0a2, Order Item 0b2 (order_id)
- `customer_orders.json` - Order Item 0b2 (order_id)

✅ **Order 0a3** is referenced by:
- `orders.json` - Order 0a3 (_id)
- `orders.json` - Order 0a3, Order Item 0b3 (order_id)
- `customer_orders.json` - Order Item 0b3 (order_id)

✅ **Order 0a4** is referenced by:
- `orders.json` - Order 0a4 (_id)
- `orders.json` - Order 0a4, Order Item 0b4 (order_id)
- `customer_orders.json` - Order Item 0b4 (order_id)

✅ **Order 0a5** is referenced by:
- `orders.json` - Order 0a5 (_id)
- `orders.json` - Order 0a5, Order Item 0b5 (order_id)
- `customer_orders.json` - Order Item 0b5 (order_id)

## 🏪 **Store References**
✅ **Store 071** (Downtown Supermarket) is referenced by:
- `loyalty_programs.json` - Super Saver Rewards (store_id)

✅ **Store 072** (Westside Market) is referenced by:
- `loyalty_programs.json` - Westside Rewards (store_id)

✅ **Store 073** (Central Grocery) is referenced by:
- `loyalty_programs.json` - Central Rewards (store_id)

## 🏭 **Supplier References**
✅ **Supplier 031** (Fresh Dairy Co.) is referenced by:
- `inventory.json` - Organic Whole Milk (inventory_supplier)

✅ **Supplier 032** (Organic Farms Inc.) is referenced by:
- `inventory.json` - Whole Wheat Bread (inventory_supplier)

## ✅ **Summary**
All ObjectIds are properly matched across collections! The relationships are:
- **Addresses** → Referenced by Suppliers, Employees, Store Locations, Inventory
- **Customers** → Referenced by Orders
- **Employees** → Referenced by Orders  
- **Products** → Referenced by Orders and Customer Orders
- **Orders** → Referenced by Customer Orders
- **Stores** → Referenced by Loyalty Programs
- **Suppliers** → Referenced by Inventory

Your data is ready for MongoDB Compass import! 🎉 