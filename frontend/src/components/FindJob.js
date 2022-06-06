import { useNavigate } from "react-router-dom";


const FindJob = () => {

  let navigate = useNavigate();
  function handleClick() {
    navigate("/signupproviderone");
  }

  /*images are from: ttps://www.pexels.com/*/
  return (
    <div className="findjob">
      <img src={require('../images/barber.jpg')} className="image-barber"/>
      <img src={require('../images/makeup.jpg')} className="image-makeup"/>
      <img src={require('../images/gardening.jpg')} className="image-garden"/>
      <button className={"Button"} type="submit" onClick={handleClick}>Join Us!</button>
    </div>
  );
}
export default FindJob;