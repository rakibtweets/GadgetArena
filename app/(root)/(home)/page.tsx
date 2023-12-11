import Counter from '@/components/Counter/Counter';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home | GadgetArena'
};

export default function Home() {
  return <Counter />;
}
