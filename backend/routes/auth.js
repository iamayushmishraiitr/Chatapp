import express from "express"
import {  signin, signup } from "../controllers/authcontrollers.js";
const router = express.Router() ;
router.post('/signup',signup)

router.get('/signin',signin)

export default router