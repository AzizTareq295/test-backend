import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Module/Header/Header'
import '../styles/styles.scss'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import Store from '../reducer'

const store = createStore(Store, composeWithDevTools(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  ) 
}

export default MyApp
