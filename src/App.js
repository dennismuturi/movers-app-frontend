import { HomePage } from "./components";

import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/mover/:id" element={<MoverPage/>}/>
  </Routes>
   </>
  );
}

export default App;
