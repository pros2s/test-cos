import { filters } from '@/features/filters';
import { search } from '@/features/search';
import { cards } from '@/widgets/cards';

document.addEventListener('DOMContentLoaded', () => {
  cards();
  filters();
  search();
});
