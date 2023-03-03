import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
const CompC = () => {
  const framework = useContext(GlobalContext);
  return (
    <>
      <div>Comp C </div>
      <div>{framework}</div>
    </>
  );
};

export default CompC;
