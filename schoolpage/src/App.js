import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/join" element={<JoinPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;