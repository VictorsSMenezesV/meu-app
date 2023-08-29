import React from "react";

import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";

import Exibe from './pages/Exibe/exibe';
import Inicio from './pages/Inicio/inicio';

function App() {
return(
  <Router>
  <Routes>
    <Route path="/" element={<Exibe />} />
    <Route path="/inicio" element={<Inicio />} />
  </Routes>
</Router>
)
}

export default App;
