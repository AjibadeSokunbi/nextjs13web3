"use client";

import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Toggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default Toggle;
