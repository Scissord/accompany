import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";
import { Toaster, Modal } from "@components";
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";

interface ViewProps {
  title: string;
  display: ReactNode;
}

interface ViewContextType {
  notification: {
    show: (message: string, type: "info" | "success" | "warning" | "error") => void;
  };
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
}

interface NotificationState {
  show: boolean;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

export const useViewContext = () => {
  return useContext(ViewContext);
};

const defaultNotification: NotificationState = {
  show: false,
  message: "",
  type: "success"
};

export const ViewContext = createContext<ViewContextType | null>(null);

export const View: FC<ViewProps> = ({ title, display }) => {
  const { i18n } = useTranslation();

  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState(i18n.resolvedLanguage || "");
  const [notification, setNotification] = useState<NotificationState>(defaultNotification);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const showNotification = (message: string, type: "info" | "success" | "warning" | "error") => {
    setNotification({ show: true, message, type });
    toast[type](`${message}`, {
      onClose: () => hideNotification(),
    })
  };

  const hideNotification = () => {
    setNotification(defaultNotification);
  };

  const data = {
    notification: {
      show: showNotification,
    },
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
      {notification.show && <Toaster />}
      {modal && <Modal/>}
      <div className={`min-h-[100vh] ${theme === 'dark' ? 'dark' : ''}`}>
        {display}
      </div>
    </ViewContext.Provider>
  );
};
