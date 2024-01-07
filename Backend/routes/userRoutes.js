import { Router } from 'express';
import { createUser, verifyOTP, createPassword, userDetails, login, resendOTP, upload, handleFileUpload, forgotPassword, CheckAdmin } from '../controllers/userController.js';
const router = Router();



router.post('/', createUser);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/create-password', createPassword);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/check-admin', CheckAdmin);
router.post('/user-details', userDetails);
router.post('/upload', upload.single('file'), handleFileUpload);

export default router;
