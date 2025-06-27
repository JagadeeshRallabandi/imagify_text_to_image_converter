# 🖼️ Text-to-Image Generator – Full Stack AI SaaS App (MERN Stack)

Welcome to the **Text-to-Image Generator** – a full stack SaaS application that allows users to generate AI-powered images from text prompts using the ClipDrop API. This app includes a credit system for image generation, secure authentication, and payment integration using Razorpay and Stripe.

## 🚀 Features

- 🔐 User Authentication (Signup/Login using JWT)
- 🧠 Text-to-Image generation using **ClipDrop API**
- 💳 Credit-based system: Spend credits to generate images
- 🛒 Buy credits via **Razorpay** and **Stripe** payment gateways
- 📦 MongoDB database for storing user data and transaction history
- 🌐 RESTful APIs built with Node.js and Express
- 🖥️ Modern UI using React.js
- 📈 Secure and scalable SaaS model

## 🛠️ Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, Axios                     |
| Backend   | Node.js, Express.js                 |
| Database  | MongoDB (with Mongoose ODM)         |
| Auth      | JWT (JSON Web Tokens)               |
| Payments  | Razorpay, Stripe                    |
| AI API    | [ClipDrop](https://clipdrop.co/apis/text-to-image) |
| Hosting   | Vercel (Frontend), Render/Railway (Backend) |

## 📁 Folder Structure

```
IMAGINE_AI/
├── client/                  # React Frontend
├── server/                  # Node.js + Express Backend
│   ├── configs/             # MongoDB and config files
│   ├── controllers/         # API logic (image & user)
│   ├── middlewares/         # JWT authentication middleware
│   ├── models/              # Mongoose models (User, Transaction)
│   ├── routes/              # API routes
│   ├── .env                 # Environment variables
│   └── server.js            # Entry point
├── .gitignore
├── package.json
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file inside the `server/` directory with the following values:

```
# JWT Authentication
JWT_SECRET="your_jwt_secret"

# MongoDB
MONGODB_URI="your_mongodb_connection_string"

# ClipDrop API
CLIPDROP_API="your_clipdrop_api_key"

# Razorpay Payment
CURRENCY="INR"
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"

# Stripe Payment
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

## 📦 Installation & Running the Project

### Clone the Repository

```bash
git clone https://github.com/your-username/text-to-image-generator.git
cd text-to-image-generator
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## 📸 How It Works

1. Users can register/login using JWT-based authentication.
2. Each user receives initial free credits.
3. By entering a text prompt, users can generate an AI image.
4. 1 credit = 1 image generation.
5. If credits are exhausted, users can purchase more using Razorpay or Stripe.
6. Users can view and download the generated images.

## 🧪 API Endpoints

| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| POST   | `/api/auth/register`      | Register a new user        |
| POST   | `/api/auth/login`         | Login with credentials     |
| GET    | `/api/user/profile`       | Get user profile data      |
| POST   | `/api/image/generate`     | Generate image from text   |
| POST   | `/api/payment/checkout`   | Initiate payment and add credits |

## 📷 Screenshots

> *(Add UI screenshots or generated images here if available)*

## 💡 Future Improvements

- 🧠 GPT-based prompt suggestions
- 🧾 Image generation history
- 🌐 Multi-language support
- ✨ UI themes (Dark mode, etc.)

## 🧠 Learnings

This project helped in learning and implementing:

- Integration of external AI APIs
- Building a credit-based system
- Using Razorpay & Stripe in a MERN application
- Creating secure authentication using JWT
- Building scalable full stack SaaS apps

## 🧾 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## 🙌 Acknowledgements

- [ClipDrop API](https://clipdrop.co/apis/text-to-image)
- [Razorpay](https://razorpay.com/)
- [Stripe](https://stripe.com/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)
