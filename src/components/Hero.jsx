import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-pink-600 drop-shadow-sm">
            Celebrate Every Birthday in Style
          </h1>
          <p className="mt-4 text-lg md:text-xl text-pink-700/80">
            A playful, pink-themed experience with layered photo cards, floating moments, and a burst of ribbons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
