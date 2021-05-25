import { useSelector } from "react-redux";
export const useToken=()=>{
  const {value} = useSelector(state => state.token)
  return value;
}
