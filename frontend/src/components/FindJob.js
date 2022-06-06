import { useNavigate } from "react-router-dom";

import {
  Form,
  Card
} from "reactstrap";


const FindJob = () => {

  let navigate = useNavigate();
  function handleClick() {
    navigate("/signupproviderone");
  }


  return (
    <div className="findjob">
      <button className={"Button"} type="submit" onClick={handleClick}>Sign Up</button>
    </div>
  );
}
export default FindJob;