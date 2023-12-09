'use client';
import {
  increment,
  decrement,
  reset
} from '@/redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="flex gap-8">
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="font-bold">{count}</span>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="rounded bg-white px-4 py-2 text-black"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
