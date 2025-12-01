import { CARD_BAG_SELECTOR, CARD_ELEMENT_SELECTOR, CARDS_SELECTOR } from '@/shared/consts/selectors/cards';

export const filterCardList = (curFilterBag) => {
  const cardsBlock = document.querySelector(CARDS_SELECTOR);
  const cardsElems = cardsBlock.querySelectorAll(CARD_ELEMENT_SELECTOR);

  cardsElems.forEach((elem) => {
    const elemBag = elem.querySelector(CARD_BAG_SELECTOR);
    const elemText = elemBag.textContent.toLowerCase();

    const isMatchFilter = elemText === curFilterBag || curFilterBag === 'all';
    if (isMatchFilter) {
      elem.removeAttribute('style');
    } else {
      elem.style = 'display: none;';
    }
  });
};
