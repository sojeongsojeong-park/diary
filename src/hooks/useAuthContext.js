import { useContext, Dispatch } from "react";
import { AuthContext } from "../context/AuthContext";
export const useAuthContext = () => {
  //state와 dispatch 함수가 들어있습니다.
  const context = useContext(AuthContext);

  return context;
};
