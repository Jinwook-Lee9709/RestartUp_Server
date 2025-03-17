import { Router } from "express";
import userCtrl from "../../controllers/user.ctrl.mjs";

const router = Router();

router.post('/api/users', userCtrl.process.register);

export default router;
