NovaCart – Premium AI-Powered E-Commerce Platform
Overview

NovaCart is a modern full-stack e-commerce web application designed to provide a premium online shopping experience. The platform allows users to browse products, explore categories, view exclusive deals, manage shopping carts and wishlists, place orders, and receive AI-powered product recommendations through the NovaAI assistant.

Built using React, Node.js, Express.js, and MongoDB, NovaCart follows a scalable architecture with separate customer and authentication modules.

Features
User Authentication
User Registration
User Login
JWT-based Authentication
Role Management (Customer/Admin)
Persistent Login using Local Storage
Product Management
Product Catalog with Multiple Categories
Product Details Page
Dynamic Product Images
Search Functionality
Category Filtering
Product Recommendations
Shopping Features
Add to Cart
Remove from Cart
Quantity Management
Wishlist Management
Cart Item Notifications
Price Calculation
Deals Section
Flash Sale Products
Discounted Prices
Deal-Specific Product Pages
Dynamic Price Updates
Categories
Electronics
Gaming
Fashion
Books
Home & Furniture
Beauty
NovaAI Assistant
AI-Based Product Recommendation System
Budget-Based Suggestions
Category-Based Recommendations
Personalized Shopping Assistance
Order Management
Checkout Process
Order Creation
Order History
Order Status Tracking
User Profile
User Information Display
Personalized Dashboard
Order Access
Wishlist Access
Technology Stack
Frontend
React.js
React Router DOM
Tailwind CSS
Axios
Context API
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
Development Tools
Vite
Git
GitHub
VS Code
Project Structure
NovaCart/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── customer/
│   │   │   └── admin/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
Key Functionalities
Product Browsing

Users can explore products from various categories including Electronics, Gaming, Fashion, Books, Home, and Beauty.

Smart Search

Real-time search enables customers to quickly find products based on product names.

Cart & Wishlist

Products can be added to the cart or wishlist with notification badges showing item counts.

Deals & Discounts

The Deals page offers discounted products with automatically calculated sale prices.

AI Recommendations

NovaAI analyzes user preferences and recommends products based on category, budget, and shopping interests.

Responsive Design

The application is fully responsive and optimized for desktop, tablet, and mobile devices.

Future Enhancements
Payment Gateway Integration (Stripe/Razorpay)
Admin Product Management Dashboard
Product Reviews and Ratings
Inventory Management
AI Chatbot with OpenAI API
Order Tracking System
Email Notifications
Dark/Light Theme Toggle
Multi-Vendor Marketplace Support
Learning Outcomes

This project demonstrates practical implementation of:

Full Stack Web Development
REST API Development
Authentication & Authorization
React Context API
State Management
MongoDB Database Operations
E-Commerce Application Design
AI-Powered Recommendation Systems
Responsive UI Developement
