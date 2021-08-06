import { useSelector } from "react-redux";
export const useToken=()=>{
  const {token} = useSelector(state => state.user)
  return token;
}
