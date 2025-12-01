import { CARD_DATA } from '@/shared/consts/api/data';
import { createCard } from './utils/createCard';

export const cards = () => {
  CARD_DATA.forEach((card) => {
    createCard(card);
  });
};
