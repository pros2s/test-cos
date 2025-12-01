import { CARD_DATA } from './consts/config';
import { createCard } from './utils/createCard';

export const cards = () => {
  CARD_DATA.forEach((card) => {
    createCard(card);
  });
};
