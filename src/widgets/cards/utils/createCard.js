import { cardsBlockSelector } from "..//consts/selectors";
import { getCardBagColor } from "./getCardBagColor";

export const createCard = (card) => {
  const { img, name, bag, price, author } = card;

  const cardsBlock = document.querySelector(cardsBlockSelector);

  const cardBlock = document.createElement("div");
  cardBlock.className = "cards__elem";
  cardsBlock.appendChild(cardBlock);

  const cardImg = document.createElement("img");
  cardImg.src = img;
  cardImg.alt = name;
  cardBlock.appendChild(cardImg);

  const infoBlock = document.createElement("div");
  infoBlock.className = "cards__info";
  cardBlock.appendChild(infoBlock);

  const bagElem = document.createElement("span");
  bagElem.className = "cards__bag";
  bagElem.classList.add(getCardBagColor(bag));
  bagElem.textContent = bag;

  const nameElem = document.createElement("p");
  nameElem.textContent = name;
  infoBlock.appendChild(bagElem);
  infoBlock.appendChild(nameElem);

  const postInfoBlock = document.createElement("div");
  postInfoBlock.className = "cards__postinfo";
  infoBlock.appendChild(postInfoBlock);

  const priceElem = document.createElement("span");
  priceElem.textContent = price;

  const authorElem = document.createElement("p");
  authorElem.textContent = author;
  postInfoBlock.appendChild(priceElem);
  postInfoBlock.appendChild(authorElem);
};
