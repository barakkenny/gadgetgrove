import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'
// import { Provider } from 'react-redux'
// import appStore from '@/utils/appStore'
import { CartProvider} from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={appStore}>
    <App/>
    </Provider> */}
    <CartProvider>
      <App />
     </CartProvider> 

  </React.StrictMode>
);
