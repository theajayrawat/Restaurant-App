import RestrauntCard from "./RestrauntCard";
import { useState } from "react"; 
import Shimmer from "./Shimmer"; 
import { swiggy_api_URL } from "../constant";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useResData from "../utils/useResData"; 



const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
 

  
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

 
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          
          onChange={(e) => {
            setSearchText(e.target.value);
            
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
           
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data are fetched then display restaurants cards otherwise display Shimmer UI */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link style={{"textDecoration": "none"}}
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestrauntCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;

