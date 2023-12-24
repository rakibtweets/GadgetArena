'use client';
import Image from 'next/image';
import Container from '../ui/Container';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <Container>
      <div className=" flex min-h-[350px] w-full items-center justify-center border border-red-500 bg-black p-10 text-white">
        <div className="flex h-full w-full flex-col-reverse items-center justify-center border border-red-500 md:flex-row">
          <div className="flex h-full flex-1 flex-col items-start justify-center ps-6  ">
            <div className="mb-8">
              <p className="text-center font-normal leading-6">
                iphone 15 series
              </p>
            </div>
            <h1 className=" mb-4 text-5xl font-semibold leading-snug">
              Up to 10% <br /> off Voucher
            </h1>

            <div className="mt-2">
              <Button
                className="gap-2 text-foreground"
                size={'sm'}
                variant={'secondary'}
              >
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={'/assets/images/hero_iphone.png'}
              width={500}
              height={500}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Hero;
