import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";
import { Modal } from "@components";

interface ViewProps {
  title: string;
  display: ReactNode;
};

interface ViewContextType {
  theme: {
    get: string;
    set: Dispatch<SetStateAction<string>>;
  };
  modal: {
    set: Dispatch<SetStateAction<boolean>>;
  };
};

export const useViewContext = () => {
  return useContext(ViewContext);
};

export const ViewContext = createContext<ViewContextType | null>(null);

export const View: FC<ViewProps> = ({ title, display }) => {
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('dark');

  const data = {
    theme: {
      get: theme,
      set: setTheme,
    },
    modal: {
      set: setModal
    }
  };

  document.title = title

  if (!display) return null

  return (
    <ViewContext.Provider value={{ ...data }}>
      {modal && <Modal/>}
      <div className={`min-h-[100vh] ${theme === 'dark' ? 'dark' : ''}`}>
        {display}
      </div>
    </ViewContext.Provider>
  );
};
