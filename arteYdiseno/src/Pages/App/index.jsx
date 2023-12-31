import {useRoutes, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from '../../Components/Context'
import Home from '../Home'
import Products from '../Products'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import OrderProduct from '../../Components/Orderproduct'
import Footer from '../../Components/Footer'



const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: 'Products', element: <Products/>}
    ])
    return routes
}

const App = ()=>{
    return(
        <CartContextProvider>
            <BrowserRouter>
                <Header/>
                <AppRoutes/>
                <Navbar/>
                <Footer/>
            </BrowserRouter>
            <OrderProduct/>
        </CartContextProvider>
    )
}

export default App