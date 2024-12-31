# Shopping Cart Application

This is a React-based shopping cart application that allows users to browse products, add items to their cart, adjust quantities, and calculate the total price. Try the live demo [here](https://example-live-demo-link.com). The cart's state is persisted using `localStorage` so users don't lose their selections after refreshing the page.

---
# Live Demo: [Link](https://example-live-demo-link.com)
## Features

- **View Products:**
  Users can view a list of available products with details like title, description, price, image, and rating.

- **Add to Cart:**
  Users can add products to their cart. If a product already exists in the cart, its quantity increases.

- **Update Quantity:**
  Users can adjust the quantity of each product in the cart using input controls.

- **Remove Items:**
  Users can remove products from the cart.

- **Clear Cart:**
  Users can clear all items from the cart at once.

- **Persist Cart:**
  The cart is stored in `localStorage`, so the state persists even after the page is refreshed.

- **Calculate Total:**
  The application calculates the total price of the cart by multiplying each product's price by its quantity.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Surajtamatta/store-ecommerce.git
   cd shopping-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## How It Works

### 1. **Cart Context**

The application uses React Context and Reducers to manage cart state:

- **Actions Supported:**
  - `LOAD_CART`: Loads cart data from `localStorage` on application start.
  - `ADD_TO_CART`: Adds a product to the cart or increases the quantity if it already exists.
  - `REMOVE_FROM_CART`: Removes a specific product from the cart.
  - `UPDATE_QUANTITY`: Updates the quantity of a specific product in the cart.
  - `CLEAR_CART`: Clears all items from the cart.

- **LocalStorage Integration:**
  - On application load, the cart state is initialized with data from `localStorage`.
  - Any changes to the cart automatically update `localStorage`.

### 2. **Cart Page**

- Displays a list of products in the cart with the following details:
  - Image
  - Title
  - Description (truncated)
  - Price
  - Rating
  - Quantity (adjustable using an input box)

- Calculates and displays the total price of the cart.

- Allows users to:
  - Remove items from the cart.
  - Clear the entire cart.
  - Navigate to individual product pages.

### 3. **Product Listings**

- Lists all available products with options to:
  - Add products to the cart.
  - Sort products by price or rating.
  - Search for products by name.

---

## Folder Structure

```
shopping-cart/
├── components/
│   ├── CartPage.js       # Cart page component
│   ├── ProductList.js    # Displays a list of products
│   ├── DropDown.js       # Dropdown for sorting and filtering
├── utils/
│   ├── cartContext.js    # Cart context and reducer logic
├── pages/
│   ├── index.js          # Homepage
│   ├── cart.js           # Cart page
├── styles/
│   ├── global.css        # Global styles
│   ├── components/       # Component-specific styles
└── public/
    ├── assets/           # Static assets (images, icons, etc.)
```

---

## How to Use

1. **Browse Products:**
   Navigate to the homepage to view the list of products. Use the search bar or sort dropdown to refine your search.

2. **Add Products to Cart:**
   Click the "Add to Cart" button on a product card to add it to the cart.

3. **Manage Cart:**
   Go to the "Cart" page to:
   - Adjust product quantities.
   - Remove products.
   - Clear the entire cart.

4. **Checkout:**
   Review the total price displayed at the bottom of the cart page.

---

## Future Enhancements

- Add user authentication.
- Implement a checkout and payment gateway.
- Add dynamic category filtering.
- Integrate a backend for storing product data.

---

## Contributions

Contributions are welcome! Please open an issue or submit a pull request to propose improvements.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

[Suraj Tamatta]  
[GitHub Profile](https://github.com/Surajtamatta)

