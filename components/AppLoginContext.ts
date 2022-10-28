import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextType {
    isLoggedIn: boolean;
    token: string;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
    setToken: Dispatch<SetStateAction<string>>
}

const AppLoginContext = createContext({} as AppContextType);

export default AppLoginContext;