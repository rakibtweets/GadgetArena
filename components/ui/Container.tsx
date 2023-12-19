import React from 'react';
const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-auto w-full max-w-7xl">{children}</section>;
};
export default Container;
