import { navLinks } from '@/constants';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Cart from '@/components/Cart/Cart';

const Navbar = () => {
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex ">
          <Link href="/">GadgetArena</Link>
        </div>
        <div className=" hidden items-center justify-center gap-6 lg:flex ">
          {navLinks.map((link) => (
            <Link href={link.name} key={link.route}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2  ">
          <p>search</p>
          <ThemeToggle />
          <Cart />
          <p>Profile</p>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
