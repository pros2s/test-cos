export const cardToggleByMatch = (element, matchCondition) => {
  if (matchCondition) {
    element.removeAttribute('style');
  } else {
    element.style = 'display: none;';
  }
};
