import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{

            // Vanilla redux(older redux) => don't mutate state,returning was mandatory 
            // const newState=[...state];
            // newState.items.push(action.payload);
            // return newState;


            // Redux Tollkit(new redux) uses immer behind the seance => mutate the state here
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        //originalState=["pizza"]
        clearCart:(state)=>{
            state.items.length=0;//length(0) will make your state as empty array  
            //console.log(state);[pizza]
            //console.log(current(state));
            //state=[];
            //console.log(satte);state=[]
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;