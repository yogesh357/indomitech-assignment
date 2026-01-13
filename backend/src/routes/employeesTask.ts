import express from 'express'
import { createTask, getAllTasks } from '../controllers/employeeTaskController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()
router.get('/', protect, getAllTasks)
router.post('/assign', protect, createTask)

export default router