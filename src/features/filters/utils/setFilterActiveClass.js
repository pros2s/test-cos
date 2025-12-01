import { filtersElemSelector, filtersSelector } from '../consts/selectors/filters';

export const setFilterActiveClass = (currentFilterBag) => {
  const filtersBlock = document.querySelector(filtersSelector);
  const filterElems = filtersBlock.querySelectorAll(filtersElemSelector);

  filterElems.forEach((filter) => {
    const curFilterBag = filter.childNodes[0]?.dataset.filter;

    filter.classList.remove('active');

    if (curFilterBag === currentFilterBag) {
      filter.classList.add('active');
    }
  });
};
