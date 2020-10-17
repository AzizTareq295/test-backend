import axios from 'axios'

export const storeProduct = (data) => {
  
  return dispatch => {
    axios.post('http://127.0.0.1:8000/api/product', data)
      .then(res => {
        if (res.data.message == 'success') {
          dispatch({
            type: "FETCH_PRODUCTS",
            data: res.data
          }) 
        }
      })
      .catch(err=> {
        console.log(err)
      })
  }
}