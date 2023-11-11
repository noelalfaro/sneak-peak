import express from 'express';

import ShoesController from '../controllers/shoes.js';

const router = express.Router();

router.get('/', ShoesController.getShoes);
router.get('/edit/:id', ShoesController.getShoe);
router.patch('/edit/:id', ShoesController.updateShoe);
router.delete('/edit/:id', ShoesController.deleteShoe);

router.post('/', ShoesController.createShoe);

export default router;
