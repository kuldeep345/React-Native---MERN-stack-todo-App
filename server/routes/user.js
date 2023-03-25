import express from 'express'
import { login, register, verify ,logout, addTask, updateTask, removeTask, updateProfile, updatePassword, forgotPassword, resetPassword } from '../controllers/user.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router()

router.route("/register").post(register)
router.route('/verify').post(isAuthenticated , verify)
router.route("/login").post(login)
router.route("/logout").get(logout)

router.route('/newtask').post(isAuthenticated , addTask)
router.route('/me').get(isAuthenticated , addTask)
router.route('/task/:taskId').put(isAuthenticated , updateTask).delete(isAuthenticated , removeTask)

router.route('/updateProfile').put(isAuthenticated , updateProfile)
router.route('/updatePassword').put(isAuthenticated , updatePassword)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetpassword').put(resetPassword)

export default router;