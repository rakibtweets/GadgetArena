import { navLinks } from '@/constants';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

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
          <p>cart</p>
          <p>Profile</p>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
