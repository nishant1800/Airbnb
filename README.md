# 🏠 Airbnb Clone (Node.js + MongoDB)

This is a **full-stack Airbnb clone** built using **Node.js, Express, MongoDB, and EJS**.  
It allows users to register, create listings, upload images, add reviews, and manage bookings — just like Airbnb.

---

## 🚀 Features
- 🔐 User authentication & authorization (Passport.js)
- 🏡 Create, edit, and delete listings
- 📷 Upload and manage images with **Cloudinary + Multer**
- ⭐ Add, edit, and delete reviews
- 💬 Flash messages for success & errors
- 🎨 Responsive UI built with **EJS + Bootstrap**
- 🗄️ MongoDB for data storage
- ☁️ Deployment ready for **Render** + **MongoDB Atlas**

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js, Express-session
- **File Uploads:** Multer, Cloudinary
- **Templating Engine:** EJS
- **Styling:** Bootstrap / Custom CSS
- **Validation & Security:** Joi, Helmet, Express Error Handling
- **Deployment:** Render (backend), MongoDB Atlas (database)

---

## 📂 Project Structure
Airbnb-Clone/
│── models/ # Mongoose Schemas (User, Listing, Review)
│── routes/ # Express routes (listings, reviews, users)
│── controllers/ # Controllers for route logic
│── public/ # Static assets (CSS, JS, Images)
│── views/ # EJS templates
│── utils/ # Error handling & middlewares
│── app.js # Main Express app
│── package.json # Dependencies & scripts
│── .env # Environment variables
│── README.md # Documentation


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
