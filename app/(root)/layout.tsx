import Navbar from '@/components/shared/Navbar/Navbar';

import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative mx-auto w-full max-w-7xl">
      <Navbar />
      <div className="flex">
        LeftSidebar
        <section className="flex min-h-screen flex-1 flex-col  pb-6 pt-12 max-md:pb-8 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSidebar
      </div>
      Toaster
    </main>
  );
};
export default Layout;
