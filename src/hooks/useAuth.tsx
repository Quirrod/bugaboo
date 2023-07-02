import { Dispatch, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { AuthContextType } from "../context/AuthProvider";

type ContextType = {
    auth: AuthContextType;
    setAuth: Dispatch<React.SetStateAction<AuthContextType>>;
};

const useAuth = () => {
    return useContext(AuthContext) as ContextType;
};

export default useAuth;
