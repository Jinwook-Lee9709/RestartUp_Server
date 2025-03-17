import { Router } from "express";
import auth from "./auth/auth.routes.mjs";
import users from "./user/user.routes.mjs";

const router = Router();

router.use(auth);
router.use(users);

export default router;