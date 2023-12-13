import { Heart, LogOut, ShoppingBag, User } from 'lucide-react';
import { INavLinks, IProfileLink } from '@/types';

export const navLinks: INavLinks[] = [
  {
    name: 'Home',
    route: '/',
    label: 'Home'
  },
  {
    name: 'About',
    route: '/about',
    label: 'About'
  },
  {
    name: 'Contact',
    route: '/contact',
    label: 'Contact'
  }
];

export const profileLinks: IProfileLink[] = [
  {
    name: 'Profile',
    route: '/profile',
    Icon: User
  },
  {
    name: 'My Orders',
    route: '/orders',
    Icon: ShoppingBag
  },
  {
    name: 'Wishlist',
    route: '/wishlist',
    Icon: Heart
  },
  {
    name: 'Sign Out',
    route: '/signout',
    Icon: LogOut
  }
];
