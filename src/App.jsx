import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider as ReduxProvider } from "react-redux";
import store from "./stores/store";

import Navbar from "./components/NavbarComponent";
import Home from "./views/Home";
import Cart from "./views/Cart";

const App = () => {
  return (

    <ReduxProvider store={store}>
      <ParallaxProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </ReduxProvider>

  );
};

export default App;
