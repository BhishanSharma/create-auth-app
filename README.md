### 📦 Package Overview

**create-auth-app** is a robust authentication backend built with Node.js, Express, and MongoDB. It supports both JWT-based authentication (via email or username) and Google OAuth 2.0, offering a secure and extensible login system.

**Key Features:**

* **JWT Authentication**: Register and log in securely using email or username.
* **Google OAuth 2.0**: Authenticate seamlessly via Google accounts.
* **Access & Refresh Tokens**: Issue secure tokens for access and session management.
* **Avatar Uploads**: Profile picture support using Multer and Cloudinary.
* **Token Refresh & Logout**: Manage session lifecycle securely.
* **Middleware Protected Routes**: Ensure secure access to authenticated endpoints.

**Technologies Used:**

* **Backend**: Node.js, Express.js
* **Authentication**: JWT, Google OAuth (Passport.js)
* **Database**: MongoDB with Mongoose
* **File Handling**: Multer, Cloudinary
* **Environment Variables**: dotenv

---

### 🚀 Getting Started

To scaffold a new authentication-ready app, run:

```bash
npx create-auth-app my-auth-project
```

Then, follow the setup instructions provided in the generated `README.md` to configure environment variables and start the server.

---

### 📁 Output Project Structure

```
<your-custom-name>
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

### 🔗 Useful Links

* **NPM Package**: [create-auth-app](https://www.npmjs.com/package/create-auth-app)
* **GitHub Repository**: [BhishanSharma/create-auth-app](https://github.com/BhishanSharma/create-auth-app)