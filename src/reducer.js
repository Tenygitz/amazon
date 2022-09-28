export const initialState={
    basket:[],
    user:null
}
export const basketTotal=(basket)=>basket.reduce((amount,item)=>item.price +amount,0)//currency format libraray 

const reducer=(state,action)=>{
    console.log(action)
    switch (action.type) {
        case "Set_User":
            return{
                ...state,
                user:action.user
            }
        case "Add_To_Cart":
            return{ // logic for adding to cart
                ...state,
                basket:[...state.basket,action.item]
    }
           
        case "Remove_From_cart":
            //logic for removing from cart
            let newBasket=[...state.basket]
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                newBasket.splice(index,1)
            }
            return{...state,basket:newBasket}
           
        default:
           return state;
    }

}
export default reducer;