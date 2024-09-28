import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

interface ViewProps {
  title: string;
  display: ReactNode;
};

interface ViewContextType {
  theme: {
    get: string;
    set: Dispatch<SetStateAction<string>>;
  };
};

export const useViewContext = () => {
  return useContext(ViewContext);
};

export const ViewContext = createContext<ViewContextType | null>(null);

export const View: FC<ViewProps> = ({ title, display }) => {
  const [theme, setTheme] = useState('dark');

  const data = {
    theme: {
      get: theme,
      set: setTheme,
    },
  };

  document.title = title

  if (!display) return null

  return (
    <ViewContext.Provider value={{ ...data }}>
      <div className={`min-h-[100vh] ${theme === 'dark' ? 'dark' : ''}`}>
        {display}
      </div>
    </ViewContext.Provider>
  );
};
