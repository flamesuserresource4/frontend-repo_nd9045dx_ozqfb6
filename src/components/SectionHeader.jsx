import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <p className="uppercase tracking-widest text-pink-500 text-xs font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-pink-700">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-pink-600/80">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
