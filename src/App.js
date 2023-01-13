import { HomePage } from "./components";
import NavBar from "./components/NavBar";
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
  <NavBar/>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  </Routes>
   </>
  );
}

export default App;
