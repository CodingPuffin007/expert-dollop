import express from 'express';
import registerRontroller from '../controllers/auth/registerController';


const router = express.Router();


router.post('register', registerRontroller.register)


export default router
