import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext"; 
//import {Component} from "react";



//class About extends Component{} or
class About extends React.Component{
    constructor(props){
        super(props);


        //console.log("Parent Constructor")
    }
    componentDidMount(){
        //console.log("Parent Child Component Did Mount");
    }

    render(){
        //console.log("Parent Render");

        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"First"} location={"Dehradun Class"}/>
                {/* <UserClass name={"Second"} location={"USA"}/>
                <UserClass name={"Third"} location={"UK"}/> */}
            </div>
        );
    }  
}

/*   
-Parent Constructor
-Parent render

  -First child Constructor
  -First child Render

  -Second child Constructor
  -Second child Render

  <DOM UPDATED - IN SINGLE BATCH>
   
  -First ComponentDidMount
  -Second ComponentDidMount 

-Parent ComponentDidMount
*/ 

export default About; 