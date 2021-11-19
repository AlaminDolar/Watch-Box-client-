import React from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;