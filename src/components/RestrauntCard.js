import { IMG_CDN_URL } from "../constant";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  avgRatingString,
}) => {
  return (
    <div className="card" >
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h5>
      <span>⭐</span>&nbsp;
      <span>{avgRatingString}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{areaName}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{sla?.lastMileTravelString}</span>
      </h5>
      
    </div>
  );
};

export default RestrauntCard;
