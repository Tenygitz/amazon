import {createSlice} from "@reduxjs/toolkit";

const initialState={
    
    basket:[],
    productOverView:" "
   
}

const basketSlice= createSlice({
    name:"basket",
    initialState,
    reducers:{
        
        AddToCart:(state,action)=>{
        
            
            state.basket=[...state.basket,action.payload]
        },
        RemoveFromCart:(state,action)=>{
                const index=state.basket.findIndex((basketItem)=>basketItem.id===action.payload.id)
                let newBasket=[...state.basket]
                if(index>=0){
                  newBasket.splice(index,1)
                }else{
                   console.log("cant remove id") 
                }
                state.basket=newBasket
        },
        AddToProductOverView:(state,action)=>{
            state.productOverView=action.payload
        }
       
    }
})

export const {AddToCart,RemoveFromCart,AddToProductOverView}=basketSlice.actions;
export const basketTotal=(state)=>state.basket.basket.reduce((amount,item)=>item.price +amount,0)
export default basketSlice.reducer