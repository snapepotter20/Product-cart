import "./App.css";
import {Nav , Footer , SignUp , PrivateComponent , Login , AddProduct , ProductList , UpdateProduct} from './Components'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1>Hello logout Products</h1>}/>
          <Route path="/profile" element={<h1>Hello profile Products</h1>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
