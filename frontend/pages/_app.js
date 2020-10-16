import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Module/Header/Header'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
