import { HiOutlineHashtag, HiOutlineHeart, HiOutlineHome, HiOutlineMap, HiOutlinePhotograph, HiOutlineSearch, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'R&B', value: 'RNB' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Pop', value: 'POP' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Home', to: '/home', icon: HiOutlineHome },
  { name: 'Discover', to: '/', icon: HiOutlineMap },
  { name: 'Search', to: 'search', icon: HiOutlineSearch},
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Liked', to: '/liked', icon: HiOutlineHeart},
];
