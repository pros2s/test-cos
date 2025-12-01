import { filtersSelector } from '@/features/filters/consts/selectors/filters';
import { filterCardList } from '@/features/filters/utils/filterCardList';

import { BAGS } from '@/shared/config/bags';

import { setFilterActiveClass } from './utils/setFilterActiveClass';
import { setFiltersCount } from './utils/setFiltersCount';

export const filters = () => {
  const filtersBlock = document.querySelector(filtersSelector);

  setFiltersCount(filtersBlock);

  filtersBlock.addEventListener('click', (e) => {
    const currentFilter = e.target;
    const curFilterType = currentFilter.dataset.filter;
    const curFilterBag = BAGS[curFilterType]?.toLowerCase();

    if (!curFilterBag) return;

    setFilterActiveClass(curFilterType);
    filterCardList(curFilterBag);
  });
};
