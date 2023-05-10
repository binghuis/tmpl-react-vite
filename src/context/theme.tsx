import useBoolean from '@/hooks/use-boolean';
import { theme } from 'antd';
import React, { PropsWithChildren, createContext, useEffect } from 'react';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const ThemeContext = createContext({
  theme: defaultAlgorithm,
  toggleTheme: () => {},
  isDark: false,
});

function ThemeProvider({ children }: PropsWithChildren) {
  const isDark = useBoolean();

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark.state,
        toggleTheme: isDark.toggle,
        theme: isDark.state ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
