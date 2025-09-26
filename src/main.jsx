import ReactDOM from "react-dom/client";
import { BrowserRouter  } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ResultContextProvider } from './context/ResultContextProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render( 
   <ResultContextProvider>
  <BrowserRouter>
       <App />
  </BrowserRouter>
  </ResultContextProvider>
  
  

);
