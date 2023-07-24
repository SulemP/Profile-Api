import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Products/Products'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;