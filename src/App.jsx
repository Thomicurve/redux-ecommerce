import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider as ReduxProvider } from "react-redux";
import store from "./stores/store";

import Navbar from "./components/NavbarComponent";
import Home from "./views/Home";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ParallaxProvider>
        <Navbar />
        <Home />
      </ParallaxProvider>
    </ReduxProvider>
  );
};

export default App;
