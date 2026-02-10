import express from 'express';
import { signup, signin, google, signout } from '../controllers/auth.controller.js';
import { sign } from 'crypto';


const router= express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google);
router.get('/signout',signout);


export default router;