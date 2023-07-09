'use client'
import { useEffect, useState } from 'react';

export default function useScreenSize(breakpoint: number): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= breakpoint);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isVisible;
}
