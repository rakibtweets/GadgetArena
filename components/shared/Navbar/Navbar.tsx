import { navLinks } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full  items-center justify-between   p-6  sm:px-12">
      <div>
        <Link href="/">
          <p className="text-2xl font-bold">GadgetArena</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        {navLinks.map((link) => (
          <Link href={link.route} key={link.name}>
            <p className="text-base font-medium text-primary">{link.label}</p>
          </Link>
        ))}
      </div>
      <div>
        <p>Theme</p>
        <p>Avatar</p>
      </div>
    </nav>
  );
};
export default Navbar;
