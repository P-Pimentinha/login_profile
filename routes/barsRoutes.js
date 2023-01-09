import {
  createBar,
  deleteBar,
  getAllBars,
  updateBar,
  showStats,
} from '../controllers/barsController.js';
import express from 'express';
const router = express.Router();

router.route('/').post(createBar).get(getAllBars);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteBar).patch(updateBar);

export default router;
