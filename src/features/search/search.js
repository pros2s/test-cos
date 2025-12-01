import { searchSelector } from './consts/selectors/search';
import { handleSearch } from './utils/handleSearch';

export const search = () => {
  const searchElem = document.querySelector(searchSelector);

  const debouncedSearch = handleSearch();

  searchElem.addEventListener('input', (e) => {
    const value = e.target.value?.toLowerCase();

    debouncedSearch(value);
  });
};
