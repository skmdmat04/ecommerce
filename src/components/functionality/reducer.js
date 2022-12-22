export const initialState={
    cart:[],
    product:{}
};

export const totalPrice=(cart)=>{
    cart?.reduce((amount=0,item)=>amount+item.price)
}
export const repeatedItem=(cart,id)=>{
    let count=0;
  if(cart){
  for(let val of cart){
  if(val.id===id)
  count++;
  }
  }
  return count;
}
const reducer=(state,action)=>{
    switch(action.type){
        case "Add To Cart":
            return {...state,cart:[...state.cart,action.item]}
        case "Remove From Cart":
            let newCart=[...state.cart];
                const index=state.cart.findIndex((cartItem)=>cartItem.id===action.id);
                if(index>=0){
                    newCart.splice(index,1)

                }
                return {...state,
                    cart:newCart}
            case 'details':
            return{
                ...state,product:action.item
            }
            default:
                return state;
    }
}
export default reducer;
