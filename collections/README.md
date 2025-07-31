# MongoDB Compass Import Guide

## 📁 Individual Collection Files

All collection files are now separated and ready for easy import into MongoDB Compass:

- `addresses.json` - 5 address records
- `categories.json` - 8 product categories
- `suppliers.json` - 5 supplier records
- `employees.json` - 5 employee records
- `customers.json` - 5 customer records
- `products.json` - 8 product records
- `store_locations.json` - 3 store locations
- `loyalty_programs.json` - 3 loyalty programs
- `inventory.json` - 2 inventory records
- `orders.json` - 5 order records
- `customer_orders.json` - 5 order items (OrderItem interface)

## 🚀 How to Import in MongoDB Compass

### Step 1: Create Database
1. Open MongoDB Compass
2. Click **"Create Database"**
3. **Database Name**: `supermarket_db`
4. **Collection Name**: `addresses` (start with this one)
5. Click **"Create Database"**

### Step 2: Import Each Collection
For each collection file:

1. **Click on the collection name** (e.g., `addresses`)
2. **Click "Add Data"** → **"Insert Document"**
3. **Click "Insert from File"**
4. **Select the JSON file** (e.g., `addresses.json`)
5. **Leave JSON Path empty** (since these are direct arrays)
6. **Click "Insert"**

### Step 3: Repeat for All Collections
Import in this order for best results:
1. `addresses.json`
2. `categories.json`
3. `suppliers.json`
4. `employees.json`
5. `customers.json`
6. `products.json`
7. `store_locations.json`
8. `loyalty_programs.json`
9. `inventory.json`
10. `orders.json`
11. `customer_orders.json`

## ✅ Import Order Matters!
Import in the order above because:
- **Addresses** are referenced by other collections
- **Categories** are referenced by products
- **Suppliers** are referenced by inventory
- **Employees/Customers** are referenced by orders
- **Products** are referenced by order items
- **Orders** are referenced by order items

## 🎯 Quick Test
After importing, try this simple query in the `products` collection:
```javascript
{ "category": "Dairy Products" }
```

You should see the "Organic Whole Milk" product!

## 💡 Tips
- Each file contains a JSON array of documents
- All ObjectIds are properly formatted for MongoDB
- Dates are in ISO format
- Relationships are maintained through ObjectId references 