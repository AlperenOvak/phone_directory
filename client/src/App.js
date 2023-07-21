import {
  BrowserRouter,
  Routes,
  Route,
  //Link,
} from "react-router-dom";
import Add from "./pages/Add";
import Directory from "./pages/Directory";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Directory/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/Delete" element={<Delete/>}/>
          <Route path="/Update" element={<Update/>}/>

          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
