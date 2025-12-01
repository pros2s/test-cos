import ImgMan1 from '@/shared/assets/imgs/people/man1.jpg';
import ImgMan2 from '@/shared/assets/imgs/people/man2.jpg';
import ImgMan3 from '@/shared/assets/imgs/people/man3.jpg';
import ImgMan4 from '@/shared/assets/imgs/people/man4.jpg';
import ImgMan5 from '@/shared/assets/imgs/people/man5.jpg';
import ImgMan6 from '@/shared/assets/imgs/people/man6.jpg';
import ImgGirl1 from '@/shared/assets/imgs/people/girl1.jpg';
import ImgGirl2 from '@/shared/assets/imgs/people/girl2.jpg';
import ImgGirl3 from '@/shared/assets/imgs/people/girl3.jpg';

import { BAGS } from '@/shared/config/bags';
const { design, development, management, marketing, hr } = BAGS;

export const CARD_DATA = [
  {
    id: 0,
    img: ImgMan2,
    name: 'The Ultimate Google Ads Training Course',
    bag: marketing,
    price: '$100',
    author: 'Jerome Bell',
  },
  {
    id: 1,
    img: ImgMan5,
    name: 'Product Management Fundamentals',
    bag: management,
    price: '$480',
    author: 'Marvin McKinney',
  },
  {
    id: 2,
    img: ImgMan6,
    name: 'HR  Management and Analytics',
    bag: hr,
    price: '$200',
    author: 'Leslie Alexander Li',
  },
  {
    id: 3,
    img: ImgGirl1,
    name: 'Brand Management & PR Communications',
    bag: marketing,
    price: '$530',
    author: 'Kristin Watson',
  },
  {
    id: 4,
    img: ImgMan1,
    name: 'Graphic Design Basic',
    bag: design,
    price: '$500',
    author: 'Guy Hawkins',
  },
  {
    id: 5,
    img: ImgGirl2,
    name: 'Business Development Management',
    bag: management,
    price: '$400',
    author: 'Dianne Russell',
  },
  {
    id: 6,
    img: ImgMan4,
    name: 'Highload Software Architecture',
    bag: development,
    price: '$600',
    author: 'Brooklyn Simmons',
  },
  {
    id: 7,
    img: ImgGirl3,
    name: 'Human Resources – Selection and Recruitment',
    bag: hr,
    price: '$150',
    author: 'Kathryn Murphy',
  },
  {
    id: 8,
    img: ImgMan3,
    name: 'User Experience. Human-centered Design',
    bag: design,
    price: '$240',
    author: 'Cody Fisher',
  },
];
