import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type {  CartItem, CartState } from "../types";



const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>)=> {
            const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
          
        },
        decreaseItem: (state, action: PayloadAction<CartItem> )=> {
            const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing && existing.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };


        },
        removeItem: (state, action: PayloadAction<CartItem> )=> {
            return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

        },
       updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity = action.payload.quantity;
      }
    },
  },
})

export const { addItem, decreaseItem, removeItem, updateQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;
