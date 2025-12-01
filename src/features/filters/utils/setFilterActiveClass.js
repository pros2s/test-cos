export const setFilterActiveClass = (filterElems, currentFilter) => {
  const curFilterParent = currentFilter.parentNode;

  filterElems.forEach((filter) => {
    filter.classList.remove('active');

    if (filter === curFilterParent) {
      filter.classList.add('active');
    }
  });
};
