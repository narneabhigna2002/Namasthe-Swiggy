import React from "react";

class UserClass extends React.Component{
    //React.component is a class which is given by react

//state variable is object
    constructor(props){
        super(props);

        this.state={
            userInfo:{
               name:"Dummy",
               location:"Default",  
               avatar_url:"http://dummy-photo.com",
            }
        };
        //console.log(this.props.name+"Child Constructor")
    }


    async componentDidMount(){
        // console.log(this.props.name+"Child Component Did Mount");

        //API call

        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });
        // console.log(json);
    }


    componentDidUpdate(){
        // console.log("Component Did Update");
    }

    componentWillUnmount(){
        //console.log("Component Will Unmount")
    }

    render(){
        //Render() returns some javascript code
        // const {name,location}=this.props;
        // const {count,count2}=this.state; 
        console.log(this.props.name+"Child Render"); 


        const {name,location, avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
              {/* <h1>Count:{count}</h1>
              <button onClick={()=>{
                //Never update state variables directly 
                // this.state.count=this.state.count+1;
                this.setState({
                    count:this.state.count+1,
                    // count2:this.state.count2+1,  
                });
              }}
              >
                Count increase
                </button> */}
              {/* <h1>Count2:{count2}</h1> */}
              <img src={avatar_url}/>
              <h2>Name: {name}</h2>
              <h3>Location: {location}</h3>
              <h4>Contact: @akshaynarch7</h4>
            </div>
        );  
    };     
};
export default UserClass;

/**
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState>-->State variable is updated
 * 
 * ------UPDATE
 * 
 *       render(API data)
 *       <HTML (now API data)>
 *       componentDidUpdate
 */