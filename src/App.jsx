import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider as CartReduxProvider } from 'react-redux';
import cartStore from './stores/cartStore';

import Navbar from './components/NavbarComponent';
import Home from './views/Home';


const App = () => {
    return (
        <CartReduxProvider store={cartStore}>
            <ParallaxProvider>
                <Navbar />
                <Home />
            </ParallaxProvider>
        </CartReduxProvider>
    )
}

export default App;