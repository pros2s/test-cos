import { filtersElemSelector, filtersSelector } from '@/features/filters/consts/selectors/filters';

import { setFilterActiveClass } from './utils/setFilterActiveClass';
import { filterCardList } from '@/features/filters/utils/filterCardList';

export const filters = () => {
  const filtersBlock = document.querySelector(filtersSelector);
  const filterElems = filtersBlock.querySelectorAll(filtersElemSelector);

  filtersBlock.addEventListener('click', (e) => {
    const currentFilter = e.target;

    setFilterActiveClass(filterElems, currentFilter);
    filterCardList(currentFilter);
  });
};
