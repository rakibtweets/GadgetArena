import Hero from '@/components/Hero/Hero';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home | GadgetArena'
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
