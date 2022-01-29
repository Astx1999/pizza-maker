import initialState from './bag.state';

import {
    GET, ADD_TO_BAG, REMOVE_FROM_CART, CART_MINUS_ITEM,
    CART_PLUS_ITEM
} from "./bag.action";

const BagReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET: {
            return {
                ...state
            }
        }
        case ADD_TO_BAG: {
            console.log(state)
            let issetInState = false
            let newItems = state.items.map(item => {
                if (item.id === action.newItem.id) {
                    issetInState = true
                    item.count += action.newItem.count
                }
                return item
            })
            if (!issetInState) {
                newItems.push(action.newItem)
            }

            return {
                items: [...newItems],
                total: state.total + action.newItem.price * action.newItem.count,
            }
        }
        case REMOVE_FROM_CART: {
            const removedElement = state.items.filter(
                item => item.id === action.removeItem
            )
            return !removedElement.length
                ? state
                : {
                    ...state,
                    items: [
                        ...state.items.filter(item => item.id !== action.removeItem),
                    ],
                    total:
                        state.total -
                        removedElement[0].price * removedElement[0].count,
                }
        }
        case CART_MINUS_ITEM: {
            let newTotal = state.total
            let items = state.items.map(item => {
                if (item.id === action.itemId && item.count > 1) {
                    newTotal -= item.price
                    item.count--
                }
                return item
            })
            return {
                ...state,
                items: [...items],
                total: newTotal,
            }
        }
        case CART_PLUS_ITEM: {
            let newTotal = state.total
            let items = state.items.map(item => {
                if (item.id === action.itemId) {
                    newTotal += item.price
                    item.count++
                }
                return item
            })
            return {
                ...state,
                items: [...items],
                total: newTotal,
            }
        }
        default:
            return state;
    }
}

export default BagReducer;