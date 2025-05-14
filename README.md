# UserAuthenticationSystem - **JS Backend**

**UserAuthenticationSystem** is a robust authentication backend built with **Node.js**, **Express**, and **MongoDB**. It supports both **JWT-based authentication** (via email or username) and **Google OAuth 2.0**, offering a secure and extensible login system.

---

## 🚀 Features

* 🔐 **JWT Authentication**: Register and log in securely using email or username.
* 🌐 **Google OAuth 2.0**: Authenticate seamlessly via Google accounts.
* 🧾 **Access & Refresh Tokens**: Issue secure tokens for access and session management.
* 📂 **Avatar Uploads**: Profile picture support using Multer and Cloudinary.
* 🔄 **Token Refresh & Logout**: Manage session lifecycle securely.
* 🛡️ **Middleware Protected Routes**: Ensure secure access to authenticated endpoints.

---

## 🛠️ Technologies Used

* **Backend**: Node.js, Express.js
* **Authentication**: JWT, Google OAuth (Passport.js)
* **Database**: MongoDB with Mongoose
* **File Handling**: Multer, Cloudinary
* **Environment Variables**: dotenv

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/BhishanSharma/UserAuthenticationSystem.git
cd UserAuthenticationSystem
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=<your_mongo_uri>
ACCESS_TOKEN_SECRET=<your_jwt_access_secret>
REFRESH_TOKEN_SECRET=<your_jwt_refresh_secret>
CLOUDINARY_CLOUD_NAME=<cloudinary_cloud_name>
CLOUDINARY_API_KEY=<cloudinary_api_key>
CLOUDINARY_API_SECRET=<cloudinary_api_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_CALLBACK_URL=http://localhost:5000/api/v1/auth/google/callback
```

### 4. Start the Server (Development)

```bash
npm run dev
```

### 5. Access the App

Visit `http://localhost:<PORT>` in your browser or API client (e.g., Postman).

---

## 📁 Project Structure

```
UserAuthenticationSystem
├── public/
│   └── temp/.gitkeep
├── src/
│   ├── controllers/
│   │   └── user.controller.js
│   ├── db/
│   │   └── index.js
│   ├── middlewares/
│   │   ├── multer.middleware.js
│   │   └── verifyJWT.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── oauth.route.js
│   │   └── user.route.js
│   ├── sockets/
│   │   └── (if applicable)
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── cloudinary.js
│   │   └── Passport.js
│   ├── app.js
│   ├── constant.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

### 🔒 JWT Auth

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| POST   | `/register`        | Register new user              |
| POST   | `/login`           | Login with email/username      |
| POST   | `/logout`          | Logout (clears cookies/tokens) |
| PATCH  | `/change-password` | Change user password           |
| GET    | `/current-user`    | Get currently logged-in user   |
| POST   | `/refresh-token`   | Get new access token           |

### 🌐 Google OAuth

| Method | Endpoint           | Description                         |
| ------ | ------------------ | ----------------------------------- |
| GET    | `/google`          | Initiate Google login               |
| GET    | `/google/callback` | Handle Google login response        |
| POST   | `/logout`          | Logout for OAuth users (same route) |

---

## 🧪 Usage Flow

1. **Register** via `/register` with email, username, password, and avatar.
2. **Login** using email or username at `/login`.
3. **Authenticate via Google** by visiting `/google`.
4. **Get current user** data at `/current-user` (JWT required).
5. **Logout** using `/logout` to clear tokens.
6. **Refresh token** via `/refresh-token` to keep session alive.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your message"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request
