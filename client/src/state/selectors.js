export function bagItemsSelector(store) {
  return store.BagReducer.items;
}
export function bagTotalSelector(store) {
  return store.BagReducer.total;
}
