import { useSelector } from "react-redux/es/hooks/useSelector"
import FoodItem from "./FoodItem"
const Cart = () =>{
  const cartItems=useSelector(store=>store.cart.items)
  return (
    <div>
      Cart Items - {cartItems.length};
      <FoodItem {...cartItems[0]}/>
      </div>
    
  )
}

export default Cart
