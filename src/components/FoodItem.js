import { IMG_CDN_URL } from "../constant";

const FoodItem = ({ item }) => {
  return (
    <>
      <div key={item?.id}>
        <div>
          <h3>{item?.name}</h3>
          <p>
            {item?.price > 0
              ? new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(item?.price / 100)
              : " "}
          </p>
          <p>{item?.description}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
