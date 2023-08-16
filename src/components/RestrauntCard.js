import { IMG_CDN_URL } from "../constant";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>Cuisines: {cuisines.join(", ")}</h4>
      <h4>Distance: {lastMileTravelString}</h4>
    </div>
  );
};

export default RestrauntCard;
