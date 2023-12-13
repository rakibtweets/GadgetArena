import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';

export interface INavLinks {
  name: string;
  route: string;
  label: string;
}

export interface IProfileLink {
  name: string;
  route: string;
  Icon: ForwardRefExoticComponent<LucideProps>; // Assuming icons are React components
}
