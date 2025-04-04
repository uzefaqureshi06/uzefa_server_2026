import express from 'express';
import { createCard, deleteCard, getAllCard,  } from '../controller/cardController.js';
export const cardRouter =express.Router();

cardRouter.post('/',createCard)
cardRouter.get('/', getAllCard);
cardRouter.delete('/:id', deleteCard);