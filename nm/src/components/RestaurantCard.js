import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard=(props)=>{
    const {loggedInUser}=useContext(UserContext);

    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
      sla
    }=props.resData;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img 
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+
            cloudinaryImageId
            }
            > 
            </img>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo} for two</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
};

//Higher Order Component

//input - RestaurantCard==>RestaurantCardPromoted

// export const withPromotedLabel=(RestaurantCard)=>{
//     return(props)=>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props}/> 
//             </div>
//         );
//     };
// };
export default RestaurantCard;