import { useContext, useState, createContext } from "react";
// import {useNavigate} from 'react-router-dom';

// const navigate = useNavigate();

interface registerFormDataTypes {
  email: string;
  password: string;
  name: string;
  university: string;
  major: string;
  interests: string;
  semester: string;
  bio: string;
}

interface AuthContextType {
  registerForm: registerFormDataTypes;
  setRegisterForm: React.Dispatch<React.SetStateAction<registerFormDataTypes>>;
  url: string;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const url = "http://localhost:4000";
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [registerForm, setRegisterForm] = useState<registerFormDataTypes>({
    email: "",
    password: "",
    name: "",
    university: "",
    major: "",
    interests: "",
    semester: "",
    bio: "",
  });

  const contextValue = {
    url,
    loggedIn,
    setLoggedIn,
    registerForm,
    setRegisterForm,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
