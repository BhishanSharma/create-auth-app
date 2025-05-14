import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, getCurrentUser, changeCurrentPassword } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const routes = Router();

routes.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        }
    ]), registerUser);
routes.route("/login").post(loginUser);
routes.route("/logout").post(verifyJWT, logoutUser);
routes.route("/change-password").patch(verifyJWT, changeCurrentPassword);
routes.route("/current-user").get(verifyJWT, getCurrentUser);
routes.route("/refresh-token").post(refreshAccessToken);

export default routes;