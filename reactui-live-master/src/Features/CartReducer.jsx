export const totalItem = (cart) => {
    return cart.reduce((sum, watch) => sum + watch.amount, 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, watch) => total + watch.amount * watch.price, 0)
}


const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.watch]
        case "Remove":
            return state.filter(w => w.id !== action.id)

        case "Increase":
            const index1 = state.findIndex(w => w.id === action.id)
            state[index1].amount += 1;
            return [...state]
        case "Decrease":
            const index2 = state.findIndex(w => w.id === action.id)
            state[index2].amount -= 1;
            return [...state]
        default:
            return state

    }
}

export default CartReducer;