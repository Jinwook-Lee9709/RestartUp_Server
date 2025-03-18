import { Router } from "express";
import authCtrl from "../../controllers/auth.ctrl.mjs";

const router = Router();

router.post('/api/auth/sign', authCtrl.jwtAuth.sign);
router.post('/api/auth/verify', authCtrl.jwtAuth.verify);
router.post('/api/auth/login', authCtrl.login.googleAuthenticate);

export default router;
