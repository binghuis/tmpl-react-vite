import { theme } from 'antd';
import { PropsWithChildren, createContext } from 'react';
import { useBoolean, useMediaQuery } from 'usehooks-ts';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const ThemeContext = createContext({
  theme: defaultAlgorithm,
  toggleTheme: () => {},
  isDark: false,
});

function ThemeProvider({ children }: PropsWithChildren) {
  const dark = useMediaQuery('(prefers-color-scheme: dark)');
  const isDark = useBoolean(dark);

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark.value,
        toggleTheme: isDark.toggle,
        theme: isDark.value ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
