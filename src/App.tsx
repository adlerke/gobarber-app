import React from "react";
import GlobalStyle from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};
export default App;
