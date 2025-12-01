import { CARD_ELEMENT_SELECTOR, CARD_NAME_SELECTOR, CARDS_SELECTOR } from '@/shared/consts/selectors/cards';
import { cardToggleByMatch } from '@/shared/utils/cardToggleByMatch';
import { debounce } from '@/shared/utils/debounce';

export const handleSearch = () => {
  const cardsBlock = document.querySelector(CARDS_SELECTOR);
  const cardsElems = cardsBlock.querySelectorAll(CARD_ELEMENT_SELECTOR);

  return debounce(
    (value) =>
      cardsElems.forEach((elem) => {
        const elemName = elem.querySelector(CARD_NAME_SELECTOR);
        const elemText = elemName?.textContent.toLowerCase();

        const isMatchSearch = elemText.includes(value) || !value;
        cardToggleByMatch(elem, isMatchSearch);
      }),
    500,
  );
};
