import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 4 small base64 PNG ribbons (different colors) so we don't rely on external assets
const ribbons = [
  // Pink
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAdUlEQVR4nO3SsQkAMAwEwYf//1Y4m1cQbY2k4mXIQ8r8eYIABgYGBgYGBr4u8y4YwE1yXyKq8c1mI2hqvI7nJvCY9f1U5y8wkbq1mXw9qR8vJf3oPZf0cVv9mR9r2yqg8YGBgYGBgYGCw8c7m3xO1Vwrg5v4Hk+1rG3wV2wV8QnTg6Uq8LwAAAABJRU5ErkJggg==',
  // Gold
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAfElEQVR4nO3SMQqAMAwF0f7/0xq1p85QF0nI0k0bqXqY2gkGAAAAgJ9c2xwB4y9HcWf8sG8xBqz7qI9m8Jx4Cqf0w9q0a+o6b+o7mHfWbQeT1Yw9i9Vx2k1vK8m7G0q5x7kq8v8b0y4l9d4lQYGBgYGBgYGB4cM+8d7Zy9G1cQn1o+g8M4w1mAAAAAElFTkSuQmCC',
  // Blue
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAe0lEQVR4nO3SMQqAQAwF0f7/0zY1mS1wIuQmMpp1rXqY2gkGAAAAwJ9c2xwB4y9HcWf8sG8xBqz7qI9m8Jx4Cqf0w9q0a+o6b+o7mHfWbQeT1Yw9i9Vx2k1vK8m7G0q5x7kq8v8b0y4l9d4lQYGBgYGBgYGB4cM+8d7Zy9G1cQn1o+g8M4w1mAAAAAElFTkSuQmCC',
  // Purple
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAf0lEQVR4nO3SMQqAQAwF0f7/0xq1mS1wIuQmMpp1rXqY2gkGAAAAwJ9c2xwB4y9HcWf8sG8xBqz7qI9m8Jx4Cqf0w9q0a+o6b+o7mHfWbQeT1Yw9i9Vx2k1vK8m7G0q5x7kq8v8b0y4l9d4lQYGBgYGBgYGB4cM+8d7Zy9G1cQn1o+g8M4w1mAAAAAElFTkSuQmCC',
];

const positions = [
  { x: -80, y: -80, r: -25 },
  { x: 90, y: -70, r: 20 },
  { x: -60, y: 70, r: 15 },
  { x: 80, y: 80, r: -15 },
];

const RibbonBurst = ({ trigger }) => {
  const [active, setActive] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (trigger && !firedRef.current) {
      setActive(true);
      firedRef.current = true; // ensure it happens once
    }
  }, [trigger]);

  return (
    <AnimatePresence>
      {active && (
        <div className="pointer-events-none absolute inset-0">
          {ribbons.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="ribbon"
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                x: positions[i].x,
                y: positions[i].y,
                rotate: positions[i].r,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              onAnimationComplete={() => setActive(false)}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default RibbonBurst;
