import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/home/about.tsx";
import Login from "./pages/login/login.page.tsx";
import { SandBoxPage } from "./pages/sandbox/sandbox.page.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sandbox" element={<SandBoxPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
