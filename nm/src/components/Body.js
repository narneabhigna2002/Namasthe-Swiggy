import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser, setUserName } = useContext(UserContext);

  //Whenever state varibles update,react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered",listOfRestaurants);
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "McDonald's",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 4.5,
  //         "sla": {
  //             "deliveryTime": 24,
  //         },
  //     },
  // },
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "KFC",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 3.8,
  //         "sla": {
  //             "deliveryTime": 24,
  //   },
  // },
  // },
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "Dominos",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 4.1,
  //         "sla": {
  //             "deliveryTime": 24,
  //   },
  // },
  // },

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    // console.log(resData);
    //Optional chaining
    setListOfRestaurant(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection;
      </h1>
    );

  //React Hook "useContext" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
  // const {loggedInUser, setUserName } = useContext(UserContext);

  //Conditional Rendering
  // if(listOfRestaurants.length==0){
  //     return <Shimmer/>
  // }

  //Normal JS Variable
  // let listOfRestaurants=[];

  // let listOfRestaurantsJS=[
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "McDonald's",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 4.5,
  //         "sla": {
  //             "deliveryTime": 24,
  //   },
  // },
  // },
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "KFC",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 3.8,
  //         "sla": {
  //             "deliveryTime": 24,
  //   },
  // },
  // },
  // {
  //     data:
  //     {
  //         "id": "25620",
  //         "name": "Dominos",
  //         "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  //         "costForTwo": "₹400 for two",
  //         "cuisines": [
  //             "Burgers",
  //             "Beverages",
  //             "Cafe",
  //             "Desserts"
  //         ],
  //         "avgRating": 4.1,
  //         "sla": {
  //             "deliveryTime": 24,
  //   },
  // },
  // },
  // ];

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // <h2 style={{color:"red"}}>No Data Found</h2>
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restarant cards and update the UI
              //Search text
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              //Filter logic here
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4 //map reduce function
              );
              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/**if the restaurant is promoted then add a promoted label to*/}
              <RestaurantCard resData={restaurant.info} />
            </Link>
          );
        })}

        {/* <RestaurantCard resData={resList[0]}/>
              <RestaurantCard resData={resList[1]}/>
              <RestaurantCard resData={resList[2]}/>
              <RestaurantCard resData={resList[3]}/>
              <RestaurantCard resData={resList[4]}/>
              <RestaurantCard resData={resList[5]}/>
              <RestaurantCard resData={resList[6]}/>
              <RestaurantCard resData={resList[7]}/>
              <RestaurantCard resData={resList[8]}/>
              <RestaurantCard resData={resList[9]}/>
              <RestaurantCard resData={resList[10]}/>
              <RestaurantCard resData={resList[11]}/>
              <RestaurantCard resData={resList[12]}/>
              <RestaurantCard resData={resList[13]}/>
              <RestaurantCard resData={resList[14]}/> */}
      </div>
    </div>
  );
};
export default Body;
