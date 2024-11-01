import express from 'express';
import produceCTRL from '../controllers/produceControllers.mjs';

const router = express.Router();

// Create/ReadALl
router
  .route('/')
  .post(produceCTRL.createProduce)
  .get(produceCTRL.getAllProduce);

// Update/Delete
router
  .route('/:id')
  .put(produceCTRL.updateOneProduce)
  .delete(produceCTRL.deleteOneProduce);

// router.route('/seed').get(produceCTRL.seedDB);

export default router;
