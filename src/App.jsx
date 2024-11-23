import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { AppProvider } from './contents/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import SeriePage from './pages/SeriePage';
import SerieFormPage from './pages/serie/SerieFormPage.jsx';
import CategoriaFormPage from './pages/categorias/CategoriaFormPage.jsx';
import SerieEditFormPage from './pages/serie/SerieEditFormPage.jsx';
import CategoriaEditFormPage from './pages/categorias/CategoriaEditFormPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="inicio" element={<HomePage />} />
          <Route path="categorias" element={<CategoryPage />} />
          <Route path="series" element={<SeriePage />} />
          <Route path="series/nuevo" element={<SerieFormPage />} />
          <Route path="series/edit/:idserie" element={<SerieFormPage />} />
          <Route path="categorias/edit/:idcategorias" element={<CategoriaFormPage />} />
          <Route path="categorias/nuevo" element={<CategoriaFormPage />} />
          <Route path="series/editar/:id" element={<SerieEditFormPage />} />
          <Route path="/categorias/editar/:id" element={<CategoriaEditFormPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
