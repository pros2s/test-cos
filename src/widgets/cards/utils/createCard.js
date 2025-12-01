import {
  CARD_BAG_SELECTOR,
  CARD_ELEMENT_SELECTOR,
  CARD_NAME_SELECTOR,
  CARDS_SELECTOR,
} from '@/shared/consts/selectors/cards';
import { getCardBagColor } from './getCardBagColor';

export const createCard = (card) => {
  const { img, name, bag, price, author } = card;

  const cardsBlock = document.querySelector(CARDS_SELECTOR);

  const cardBlock = document.createElement('div');
  cardBlock.className = CARD_ELEMENT_SELECTOR.slice(1);
  cardsBlock.appendChild(cardBlock);

  const cardImg = document.createElement('img');
  cardImg.src = img;
  cardImg.alt = name;
  cardBlock.appendChild(cardImg);

  const infoBlock = document.createElement('div');
  infoBlock.className = 'cards__info';
  cardBlock.appendChild(infoBlock);

  const bagElem = document.createElement('span');
  bagElem.className = CARD_BAG_SELECTOR.slice(1);
  bagElem.classList.add(getCardBagColor(bag));
  bagElem.textContent = bag;
  infoBlock.appendChild(bagElem);

  const nameElem = document.createElement('p');
  nameElem.textContent = name;
  nameElem.className = CARD_NAME_SELECTOR.slice(1);
  infoBlock.appendChild(nameElem);

  const postInfoBlock = document.createElement('div');
  postInfoBlock.className = 'cards__postinfo';
  infoBlock.appendChild(postInfoBlock);

  const priceElem = document.createElement('span');
  priceElem.textContent = price;
  priceElem.className = 'cards__price';
  postInfoBlock.appendChild(priceElem);

  const sep = document.createElement('span');
  sep.className = 'cards__sep';
  postInfoBlock.appendChild(sep);

  const authorElem = document.createElement('p');
  authorElem.textContent = author;
  authorElem.className = 'cards__author';
  postInfoBlock.appendChild(authorElem);
};
