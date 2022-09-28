import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    items:[],
    totalquantity: 0,
    totalAmount:0,
}
const cartSlice = createSlice({
    name:"cart",
    initialState, 
    reducers:{
        additemtocart:(state, action)=>{
            state.items.push(action.payload)
        }

    }
});

console.log(cartSlice)
export const {additemtocart} = cartSlice.actions
export default cartSlice.reducer