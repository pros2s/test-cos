import { filtersElemSelector, filtersSelector } from '../consts/selectors/filters';

export const setFilterActiveClass = (currentFilterBag) => {
  const filtersBlock = document.querySelector(filtersSelector);
  const filterElems = filtersBlock.querySelectorAll(filtersElemSelector);

  const curFilterParent = currentFilterBag;

  filterElems.forEach((filter) => {
    const curFilterBag = filter.childNodes[0]?.dataset.filter;

    filter.classList.remove('active');

    console.log(filter);

    if (curFilterBag === curFilterParent) {
      filter.classList.add('active');
    }
  });
};
