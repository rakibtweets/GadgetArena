'use client';

import { useTheme } from 'next-themes';

const Counter = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="flex gap-4">
        <button
          onClick={() => setTheme('dark')}
          className="bg-background px-4 py-2"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('light')}
          className="bg-background px-4 py-2"
        >
          light
        </button>
        <button
          onClick={() => setTheme('system')}
          className="bg-background px-4 py-2"
        >
          system
        </button>
      </div>
    </div>
  );
};
export default Counter;
