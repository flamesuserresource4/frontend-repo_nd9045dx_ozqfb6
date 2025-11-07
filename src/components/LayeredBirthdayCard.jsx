import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RibbonBurst from './RibbonBurst';

/*
A pink-forward layered image card:
- Two layers (image1 base, image2 floats on hover)
- Click toggles reveal state to trigger one-time ribbon burst
- Hover elevates image2 without removing image1
*/

const LayeredBirthdayCard = ({ title, image1, image2 }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group rounded-3xl p-1 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(true)}
    >
      <div className="relative overflow-hidden rounded-[22px] bg-white/70">
        {/* Decorative pink glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-[26px] bg-pink-300/30 blur-2xl" />

        {/* Base layer (Image 1) */}
        <img
          src={image1}
          alt={title}
          className="block w-full h-72 object-cover"
        />

        {/* Floating layer (Image 2) */}
        <motion.img
          src={image2}
          alt={title + ' overlay'}
          className="absolute inset-0 w-full h-72 object-cover rounded-[22px]"
          style={{ mixBlendMode: 'normal' }}
          initial={{ y: 20, opacity: 0.0 }}
          animate={{
            y: hovered ? -6 : 12,
            opacity: hovered ? 1 : 0.85,
            boxShadow: hovered
              ? '0px 12px 30px rgba(236,72,153,0.35)'
              : '0px 4px 16px rgba(236,72,153,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        />

        {/* Subtle border highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/50" />

        {/* Ribbon burst (one time after first click) */}
        <RibbonBurst trigger={clicked} />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-pink-700 font-semibold text-lg">{title}</h3>
        <p className="text-pink-600/80 text-sm">Click for a confetti-style ribbon pop. Hover to float.</p>
      </div>
    </div>
  );
};

export default LayeredBirthdayCard;
