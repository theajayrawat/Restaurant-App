import { IMG_CDN_URL } from "../constant";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>Cuisines: {cuisines.join(", ")}</h5>
      <h5>Ares:{areaName}</h5>
      <h5>Distance: {sla?.lastMileTravelString ?? "2.0 km"}</h5>
    </div>
  );
};

export default RestrauntCard;
