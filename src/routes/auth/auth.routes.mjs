import { Router } from "express";
import authCtrl from "../../controllers/auth.ctrl.mjs";

const router = Router();

router.post('/api/sign', authCtrl.jwtAuth.sign);
router.post('/api/verify', authCtrl.jwtAuth.verify)

export default router;
