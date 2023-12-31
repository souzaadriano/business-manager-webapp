import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout/layout.component.tsx';
import Dashboard from './pages/admin/dashboard.page.tsx';
import SalesPage from './pages/admin/sales.page.tsx';
import About from './pages/home/about.tsx';
import Home from './pages/home/home.tsx';
import Login from './pages/login/login.page.tsx';
import { ProductPage } from './pages/product/product.page.tsx';
import { SandBoxPage } from './pages/sandbox/sandbox.page.tsx';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}></Route>
              <Route path="/sandbox" element={<SandBoxPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/sales" element={<SalesPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
