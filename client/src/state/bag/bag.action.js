export const GET = "GET";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_MINUS_ITEM = "CART_MINUS_ITEM";
export const CART_PLUS_ITEM = "CART_PLUS_ITEM";

export const getDataAC = () => ({
  type: GET,
});

export const addToBagAC = (item) => ({
  type: ADD_TO_BAG,
  newItem: item,
});

export const removeFromCartAC = (item) => ({
  type: REMOVE_FROM_CART,
  removeItem: item,
});
export const minusItemAC = (id) => ({
  type: CART_MINUS_ITEM,
  itemId: id,
});

export const plusItemAC = (id) => ({
  type: CART_PLUS_ITEM,
  itemId: id,
});
