// CustomCursor.js

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const adjustedX = clientX + window.scrollX;
      const adjustedY = clientY + window.scrollY;
      setPosition({ x: adjustedX, y: adjustedY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="w-96 h-96 opacity-5 box
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  
      from-white via-slate-300  
      to-slate-600 blur-md pointer-events-none absolute z-0 rounded-full -ml-48 -mt-48 shadow-[0_0_2rem_12rem_rgba(255,255,255,0.5)]"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
    </div>


  );
};

export default CustomCursor;
