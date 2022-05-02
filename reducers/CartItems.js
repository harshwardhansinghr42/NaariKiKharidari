const CartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            var idx = state.findIndex(item => item.id==action.payload.id)
            return state.filter( (item,index) => index !== idx );
    }
    return state
}

export default CartItems