import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ExampleComponent from "./components/ExampleComponent";
import Navbaar from "./components/Navbaar";
import LoaderHOC from "./Hoc/LoaderHOC";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LoaderHOC>
          <Navbaar />
          <Routes>
            <Route path="/" element={<ExampleComponent />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </LoaderHOC>
      </BrowserRouter>
    </div>
  );
}

export default App;
