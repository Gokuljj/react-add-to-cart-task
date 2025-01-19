# ShopZen - Add to Cart Task

**ShopZen** is a ReactJS-based shopping application that allows users to browse products fetched from the [Fake Store API](https://fakestoreapi.com/) and manage their cart using a responsive modal interface.  

The app focuses on delivering a seamless user experience by providing a responsive design, a clean interface, and real-time updates to the cart functionality.  

[**Demo Link**](https://shopzenaddcart.netlify.app/)  

---

## Features
1. **Product Display**
   - Fetches a list of products from the Fake Store API.
   - Displays product image, title, price, and an "Add to Cart" button in a responsive layout.

2. **Cart Functionality**
   - Adds products to the cart when the "Add to Cart" button is clicked.
   - Prevents duplicate entries in the cart with an alert message: "Item already added to the cart."
   - Displays the total number of products in the cart on the Navbar.

3. **Cart Modal**
   - Clicking the "Cart" button opens a modal showing all products in the cart.
   - Allows users to remove individual products from the cart using the "Remove from Cart" button.
   - Dynamically updates the cart value as products are added or removed.

4. **Responsive Design**
   - Works seamlessly on both desktop and mobile devices.

5. **State Management**
   - Properly manages cart state and product details using React props.

---

## Tech Stack
- **Frontend:** ReactJS  
- **Styling:**  Tailwind CSS  
- **Functionality:** JavaScript  
- **API Integration:** Fake Store API  

---

## Getting Started  

### Prerequisites
Ensure you have the following installed on your system:  
- Node.js (v22+)
- npm or yarn  

### Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/Gokuljj/react-add-to-cart-task.git
   cd react-add-to-cart-task
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser to view the app.

---

## Deployment
The application is deployed on Netlify.  
Visit the [Demo Link](https://shopzenaddcart.netlify.app/) to explore the app.  

---

## Folder Structure
```
shopzen/
├── src/
│   ├── assets/                 # Store static files such as images or fonts
│   ├── components/             # Reusable UI components
│   │   ├── CartModal.jsx       # Modal for cart functionality
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Navbar.jsx          # Navbar displaying cart count and navigation
│   │   ├── ProductCard.jsx     # Card layout for individual products
│   │   ├── WelcomeText.jsx     # Optional welcome message component
│   ├── pages/                  # Page-level components
│   │   ├── Home.jsx            # Home page layout displaying products
│   ├── App.css                 # General styling for the application
│   ├── App.jsx                 # Main application entry point
│   ├── index.css               # TailwindCSS or global styles
│   ├── main.jsx                # React app root file
├── public/
│   └── index.html              # HTML entry file
├── package.json
└── README.md
```

---

## Usage
- **Add Products to Cart:** Browse products and click "Add to Cart."
- **View Cart Items:** Click the "Cart" button on the Navbar to open the modal.
- **Remove Products:** Click the "Remove from Cart" button in the modal to remove items.

---

## API Reference
- **Fake Store API Endpoint:**  
  ```bash
  https://fakestoreapi.com/products
  ```
  Fetches a list of products with details like title, price, and image.

---

## Contribution
Feel free to fork this repository and submit a pull request. Contributions are welcome!  

---

## License
This project is open-source and adheres to the terms mentioned in the task document.  














# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
