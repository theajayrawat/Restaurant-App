import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  ALT_ITEM_IMG_CDN_URL,
} from "../constant";
import {MenuShimmer} from "./Shimmer";
import useResMenuData  from "../utils/useResMenuData";
import useOnline from "../utils/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";
import { addItem,removeItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const isOnline = useOnline();
  
  // if user is not Online then return UserOffline component
  if(!isOnline){
    return <UserOffline />
  }

  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    dispatch(addItem("0"));
  }

  const handleRemoveItem=(item)=>{
    dispatch(removeItem("0"));
  }

  const style= {
    "display": "flex",
      "flexWrap": "wrap",
      "gap": "15px",
      "justifyContent": "center"
  }


  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div style={style}>
      <div>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div >
          <h2 >{restaurant?.name}</h2>
          <p >{restaurant?.cuisines?.join(", ")}</p>
          <div>
            <span>⭐</span>&nbsp;
              <span>{restaurant?.avgRating}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{restaurant?.sla?.slaString}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{restaurant?.costForTwoMessage}</span>
          </div>
        </div>
      </div>

      <div style={style} >
        <div  >
          <div >
            <h3 >Recommended</h3>
            <p >
              {menuItems.length} ITEMS
            </p>
          </div>
          <div >
            {menuItems.map((item) => (
              <div key={item?.id}>
                <div >
                  <h3 >{item?.name}</h3>
                  <p >
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p >{item?.description}</p>
                </div>
                <div style={style}>
                  {item?.imageId===undefined ? (<img
                      src={ALT_ITEM_IMG_CDN_URL}
                      alt={item?.name}
                    />) : (
                    <img
                      src={ITEM_IMG_CDN_URL + item.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button onClick={()=>handleAddItem(item)}> Add +</button>
                  <button onClick={()=>handleRemoveItem(item)}> Remove -</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
