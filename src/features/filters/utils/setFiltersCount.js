import { BAGS } from '@/shared/config/bags';
import { CARD_DATA } from '@/shared/consts/api/data';

export const setFiltersCount = (filtersBlock) => {
  Object.entries(BAGS).forEach(([key, value]) => {
    const cardDataValues = Object.values(CARD_DATA);
    const curBagCount = cardDataValues.filter((val) => val.bag === value).length;
    const allCount = cardDataValues.length;

    const filterButton = filtersBlock.querySelector(`[data-filter="${key}"]`);

    const countBlock = document.createElement('p');
    countBlock.textContent = value === BAGS.all ? allCount : curBagCount;
    countBlock.className = 'actions__filter-count';
    filterButton.appendChild(countBlock);
  });
};
