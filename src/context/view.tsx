import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";
import { Modal } from "@components";
import { useTranslation } from 'react-i18next';

interface ViewProps {
  title: string;
  display: ReactNode;
};

interface ViewContextType {
  language: {
    get: string;
    set: (lng: string) => void;
  };
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
  const [language, setLanguage] = useState('RU');

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const data = {
    language: {
      get: language,
      set: changeLanguage,
    },
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
    <ViewContext.Provider value={data}>
      {modal && <Modal/>}
      <div className={`min-h-[100vh] ${theme === 'dark' ? 'dark' : ''}`}>
        {display}
      </div>
    </ViewContext.Provider>
  );
};
