import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const colors = {
    light: {
      background: 'bg-white',
      text: 'text-black',
      accent: 'text-black',
      border: 'border-gray-300',
    },
    dark: {
      background: 'bg-[#41436A]',
      text: 'text-[#f7345b]',
      accent: 'text-[#F64668]',
      border: 'border-[#FE9677]',
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
