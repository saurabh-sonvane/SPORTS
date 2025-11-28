# 🏎️ Sports Global Travel Packages – Landing Page

This project is a **full-stack assignment**, showcasing global sports event travel packages. The landing page is designed to be **fully responsive**, **fast**, and includes a **working contact form** connected to a **serverless backend** deployed on Vercel with data stored in **MongoDB Atlas**.

---

## 🚀 Tech Stack

### **Frontend**
- React  
- Next.js (App Router)  
- JavaScript  
- Tailwind CSS  
- Vercel Deployment  

### **Backend**
- Node.js  
- Express.js  
- MongoDB Atlas (Database)  
- Serverless functions on Vercel  

---

## 🔗 Live Demo Links

| Module | URL |
|--------|-----|
| **Frontend** | https://sports-frontend-srviz.vercel.app/ |
| **Backend (Contact API Endpoint)** | https://sports-backend.vercel.app/contact-form/api |

---

# 📦 Project Setup Instructions

## 1️⃣ Frontend Setup (Next.js)

### **Clone the repository**
```sh
git clone <repo-url>
cd sports-frontend  
```

### **Install dependencies**
```sh
npm install
``` 

### **Environment Variables**
```sh
Create a .env file:
#ADD
NEXT_PUBLIC_API_URL='https://sports-backend.vercel.app/contact-form/api'
``` 
### **Run the development server**
```sh
npm run dev
```

### **Backend Setup (Serverless Express API)**
```sh
cd sports-backend
npm install
```

### **Environment Variables**
```sh
#Create a .env file:
MONGO_URI=<your_mongodb_atlas_connection_string>
FRONTEND_URL=<your_frontend_url>
NODE_ENV=development
environment=development
```

### **Run locally**
```sh
npm run dev
```

### **Folder Structure Explanation**
**Frontend – /sports-frontend**
```sh
sports-frontend/
│── api/
│   └── contactService.js        # API helper to communicate with backend
│
│── app/
│   ├── layout.tsx               # Application layout
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Tailwind global styles
│
│── components/
│   ├── ContactSection.jsx       # Validated contact form with toast messages
│   ├── HeroComponent.jsx        # Hero section
│   ├── Navbar.jsx               # Mobile + desktop navbar
│   ├── Footer.jsx               # Footer component
│   ├── F1JapanCard.jsx          # Example package card
│   ├── TopPackages.jsx          # Packages list section
│   └── ui/                      # UI components (buttons, cards, etc.)
│
└── package.json
```

### **Frontend Features**

- Fully responsive (desktop + mobile)  
- Optimized compressed images  
- Contact form integrated with backend  
- Toast notifications for success/error  
- WhatsApp floating contact button  
 

**Backend – /sports-backend**
```sh
sports-backend/
│── api/
│   └── index.js                 # Vercel serverless function entry point
│
│── src/
│   ├── controllers/
│   │   └── contactController.js # Handles saving form data
│
│   ├── middleware/
│   │   └── validateRequest.js   # Request validation (if applied)
│
│   ├── models/
│   │   └── Contact.js           # Mongoose schema
│
│   ├── routes/
│   │   └── contactRoutes.js     # Contact form route
│
│   ├── app.js                   # Express app configuration
│   ├── db.js                    # MongoDB connection
│   └── server.js                # Local server entry
│
│── package.json
│── vercel.json                  # Vercel configuration for serverless deployment
```

### **Backend Features**

- Serverless Express API
- Connected to MongoDB Atlas
- Stores contact form submissions
- Form validation

### **Assumptions**

- Admin panel is not required yet, so package data is static on the frontend.
- The target audience may access via mobile, so mobile-first responsiveness is important.
- WhatsApp is a preferred channel for fast queries.

### **What I Would Improve With More Time**
**If more time is provided, the following enhancements would be added:**

1. Admin Dashboard / CMS
  - Manage all packages dynamically from database
  - Admin can create/edit/delete packages


2. Authentication
  - Email + password login
  - Google OAuth
  - JWT-based authentication system


3. Email Notifications
  - Auto-confirmation emails for users
  - Admin email alerts
  - Reminder emails


5. More UI Enhancements
  - Smooth animations
  - Dark mode
  - More detailed booking pages


6. Analytics
  - Track form submissions
  - Track user interactions
  - Page view metrics
