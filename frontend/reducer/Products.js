const initialState = {
  loader:false,
  products: [],
  errors: ''
}

const Products = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.data.products
      }

    default: 
      return {
        ...state
      }
  }
}

export default Products