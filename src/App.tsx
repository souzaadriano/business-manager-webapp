import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/admin/dashboard.page.tsx';
import About from './pages/home/about.tsx';
import Home from './pages/home/home.tsx';
import Login from './pages/login/login.page.tsx';
import { SandBoxPage } from './pages/sandbox/sandbox.page.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sandbox" element={<SandBoxPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
