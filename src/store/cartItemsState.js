import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCartItemsState = create(
  immer((set) => ({
    cart: [],
    itemQuantity: 0,
    total: 0,
    addToCart: (item) =>
      set((state) => {
        const existingCartItem = state.cart.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingCartItem) {
          // Update quantity if item exists
          state.cart = state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          // Add new item with quantity 1
          state.cart.push({ ...item, quantity: 1 });
        }
        state.total = state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
        state.itemQuantity = state.cart.reduce((sum, item) => sum + item.quantity,0);
      }),
     removeFromCart:(id) =>
      set((state) => {
        state.cart = state.cart.filter((item) => item.id != id)
        state.total = state.cart.reduce((sum, item) => sum +  item.quantity * item.price, 0 )
        state.itemQuantity = state.cart.reduce((sum, item) => sum + item.quantity,0);
      }),
      updateQuantity:(id) =>
        set((state) => {
          const findItem = state.cart.find((item) => item.id === id )
          if(findItem){
            findItem.quantity++
          }
          state.total = state.cart.reduce((sum, item) => sum +  item.quantity * item.price, 0 )
          state.itemQuantity = state.cart.reduce((sum, item) => sum + item.quantity,0);
        }),
        decreaseQuantity:(id) =>
        set((state) => {
          const findItem = state.cart.find((item) => item.id === id )
          if(findItem.quantity > 0){
            --findItem.quantity
          }else if(findItem.quantity === 0){
            state.cart = state.cart.filter((item) => item.id != id);
          }
          state.total = state.cart.reduce((sum, item) => sum +  item.quantity * item.price, 0 )
          state.itemQuantity = state.cart.reduce((sum, item) => sum + item.quantity,0);
        })
  }))
);

export default useCartItemsState;
