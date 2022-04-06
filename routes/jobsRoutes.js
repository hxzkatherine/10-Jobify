import express from 'express'
import { createJob, deleteJob, getAllJobs, showStats, updateJob } from '../controllers/jobsController.js'
const router = express.Router()

export { 
    createJob, deleteJob, getAllJobs, updateJob, showStats 
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
//remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
