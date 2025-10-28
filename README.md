# OneCart
# 💎 Luxury E-Commerce Website

A **modern, responsive e-commerce web application** built using **Node.js, Express, MySQL, HTML, and CSS**.  
This project was developed as part of a college web development course and demonstrates a complete **end-to-end shopping experience**, from browsing products to placing orders — fully deployed on **Render**.

---

## 🚀 Project Overview

The Luxury E-Commerce website provides an elegant shopping interface with features like:
- Dynamic product listing (from MySQL database)
- Cart and checkout system
- User login/registration
- Order management and confirmation
- Admin panel for managing products
- Responsive UI built with HTML & CSS
- Live deployment on Render (Backend) and Netlify (Frontend)

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Deployment** | Render (Backend), Netlify (Frontend) |
| **Version Control** | Git + GitHub |

---



yaml
Copy code

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/luxury-ecommerce.git
cd luxury-ecommerce
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root folder with the following:

ini
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=ecommerce
PORT=5000
4. Import MySQL Tables
Run these SQL commands or import the provided ecommerce.sql file:

sql
Copy code
CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  image VARCHAR(255),
  description TEXT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total_amount DECIMAL(10,2),
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
5. Run the Application
bash
Copy code
npm start
Open your browser and visit:
👉 http://localhost:5000
