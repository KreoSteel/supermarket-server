# MongoDB Compass Guide for Supermarket Server Project

## 📁 Sample Data Overview

The `sample_data.json` file contains realistic data for a supermarket management system with the following collections:

- **addresses** (5 records) - Address information
- **categories** (8 records) - Product categories
- **suppliers** (5 records) - Supplier information with embedded addresses
- **employees** (5 records) - Employee data with roles and departments
- **customers** (5 records) - Customer information with loyalty cards
- **products** (8 records) - Product catalog with pricing and inventory
- **store_locations** (3 records) - Store locations with ratings
- **loyalty_programs** (3 records) - Customer loyalty programs
- **inventory** (2 records) - Detailed inventory management
- **orders** (5 records) - Customer orders with status tracking
- **customer_orders** (5 records) - Detailed order line items

## 🚀 Import Instructions for MongoDB Compass

### Method 1: Import via MongoDB Compass UI

1. **Open MongoDB Compass** and connect to your database
2. **Create a new database** called `supermarket_db`
3. **For each collection** (addresses, categories, suppliers, etc.):
   - Click "Add Data" → "Insert Document"
   - Click "Insert from File"
   - Select the `sample_data.json` file
   - Choose the specific collection array (e.g., "addresses", "suppliers")
   - Click "Insert"

### Method 2: Import via MongoDB Shell

```bash
# Connect to MongoDB
mongosh

# Switch to your database
use supermarket_db

# Import each collection (run these commands one by one)
mongoimport --db supermarket_db --collection addresses --file sample_data.json --jsonArray --jsonPath addresses
mongoimport --db supermarket_db --collection categories --file sample_data.json --jsonArray --jsonPath categories
mongoimport --db supermarket_db --collection suppliers --file sample_data.json --jsonArray --jsonPath suppliers
mongoimport --db supermarket_db --collection employees --file sample_data.json --jsonArray --jsonPath employees
mongoimport --db supermarket_db --collection customers --file sample_data.json --jsonArray --jsonPath customers
mongoimport --db supermarket_db --collection products --file sample_data.json --jsonArray --jsonPath products
mongoimport --db supermarket_db --collection store_locations --file sample_data.json --jsonArray --jsonPath store_locations
mongoimport --db supermarket_db --collection loyalty_programs --file sample_data.json --jsonArray --jsonPath loyalty_programs
mongoimport --db supermarket_db --collection inventory --file sample_data.json --jsonArray --jsonPath inventory
mongoimport --db supermarket_db --collection orders --file sample_data.json --jsonArray --jsonPath orders
mongoimport --db supermarket_db --collection customer_orders --file sample_data.json --jsonArray --jsonPath customer_orders
```

## 📊 Learning Queries to Try

### 1. Basic Queries

**Find all products in the Dairy category:**
```javascript
{ "category": "Dairy Products" }
```

**Find employees with salary greater than $40,000:**
```javascript
{ "salary": { "$gt": 40000 } }
```

**Find customers from New York:**
```javascript
{ "address.city": "New York" }
```

### 2. Aggregation Queries

**Calculate average salary by department:**
```javascript
[
  {
    "$group": {
      "_id": "$department",
      "averageSalary": { "$avg": "$salary" },
      "employeeCount": { "$sum": 1 }
    }
  },
  {
    "$sort": { "averageSalary": -1 }
  }
]
```

**Find total sales by payment method:**
```javascript
[
  {
    "$group": {
      "_id": "$payment_method",
      "totalSales": { "$sum": "$total_amount" },
      "orderCount": { "$sum": 1 }
    }
  }
]
```

**Find products with low stock (quantity < 30):**
```javascript
[
  {
    "$match": { "quantity": { "$lt": 30 } }
  },
  {
    "$project": {
      "name": 1,
      "quantity": 1,
      "category": 1,
      "stockStatus": {
        "$cond": {
          "if": { "$lt": ["$quantity", 10] },
          "then": "Critical",
          "else": "Low"
        }
      }
    }
  }
]
```

### 3. Complex Queries

**Find orders with customer and employee details:**
```javascript
[
  {
    "$lookup": {
      "from": "customers",
      "localField": "customer_id",
      "foreignField": "_id",
      "as": "customer"
    }
  },
  {
    "$lookup": {
      "from": "employees",
      "localField": "employee_id",
      "foreignField": "_id",
      "as": "employee"
    }
  },
  {
    "$unwind": "$customer"
  },
  {
    "$unwind": "$employee"
  },
  {
    "$project": {
      "orderId": "$_id",
      "customerName": { "$concat": ["$customer.first_name", " ", "$customer.last_name"] },
      "employeeName": { "$concat": ["$employee.first_name", " ", "$employee.last_name"] },
      "totalAmount": "$total_amount",
      "status": "$status",
      "orderDate": "$order_date"
    }
  }
]
```

**Find suppliers by type with product count:**
```javascript
[
  {
    "$lookup": {
      "from": "products",
      "localField": "supplier_name",
      "foreignField": "brand",
      "as": "products"
    }
  },
  {
    "$project": {
      "supplierName": "$supplier_name",
      "supplierType": "$supplier_type",
      "productCount": { "$size": "$products" },
      "isActive": "$is_active"
    }
  },
  {
    "$sort": { "productCount": -1 }
  }
]
```

### 4. Advanced Analytics

**Monthly sales analysis:**
```javascript
[
  {
    "$addFields": {
      "month": { "$month": "$order_date" },
      "year": { "$year": "$order_date" }
    }
  },
  {
    "$group": {
      "_id": { "month": "$month", "year": "$year" },
      "totalSales": { "$sum": "$total_amount" },
      "orderCount": { "$sum": 1 },
      "averageOrderValue": { "$avg": "$total_amount" }
    }
  },
  {
    "$sort": { "_id.year": 1, "_id.month": 1 }
  }
]
```

**Customer loyalty analysis:**
```javascript
[
  {
    "$lookup": {
      "from": "orders",
      "localField": "_id",
      "foreignField": "customer_id",
      "as": "orders"
    }
  },
  {
    "$addFields": {
      "orderCount": { "$size": "$orders" },
      "totalSpent": { "$sum": "$orders.total_amount" }
    }
  },
  {
    "$project": {
      "customerName": { "$concat": ["$first_name", " ", "$last_name"] },
      "loyaltyCardNumber": "$loyalty_card_number",
      "orderCount": 1,
      "totalSpent": 1,
      "averageOrderValue": { "$divide": ["$totalSpent", "$orderCount"] },
      "loyaltyTier": {
        "$cond": {
          "if": { "$gte": ["$totalSpent", 100] },
          "then": "Gold",
          "else": {
            "$cond": {
              "if": { "$gte": ["$totalSpent", 50] },
              "then": "Silver",
              "else": "Bronze"
            }
          }
        }
      }
    }
  },
  {
    "$sort": { "totalSpent": -1 }
  }
]
```

## 🔍 Data Relationships

The sample data includes realistic relationships:

- **Customers** → **Orders** (via customer_id)
- **Employees** → **Orders** (via employee_id)
- **Suppliers** → **Products** (via supplier_name/brand)
- **Store Locations** → **Loyalty Programs** (via store_id)
- **Addresses** are embedded in multiple collections

## 💡 Learning Tips

1. **Start Simple**: Begin with basic find queries
2. **Use Projections**: Limit fields to focus on what you need
3. **Practice Aggregations**: They're powerful for data analysis
4. **Explore Relationships**: Use $lookup to join collections
5. **Test Different Scenarios**: Modify queries to see different results

## 🎯 Practice Exercises

1. Find all products that expire within the next 30 days
2. Calculate the total inventory value by category
3. Find the top 3 customers by total spending
4. List all employees with their manager (if applicable)
5. Find suppliers who provide products in multiple categories
6. Calculate average order value by store location
7. Find products that need reordering (quantity < reorder_point)

## 📈 Next Steps

Once you're comfortable with these queries:
- Create indexes for better performance
- Design more complex aggregation pipelines
- Build dashboards using MongoDB Charts
- Implement data validation rules
- Create backup and restore procedures

Happy learning! 🚀 