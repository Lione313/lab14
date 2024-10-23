import './App.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import SeriePage from './pages/SeriePage';
import SerieFormPage from './pages/SerieFormPage.jsx';
import CategoriaFormPage from './pages/CategoriaFormPage.jsx';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path ="/" element={<LoginPage/>}/>
        <Route path="inicio" element={<HomePage/>}/>
        <Route path='categorias' element={<CategoryPage/>}/>
        <Route path='series' element={<SeriePage/>}/>
        <Route path='series/edit/:idserie' element={<SerieFormPage/>} />    
        <Route path='categorias/edit/:idcategorias' element={<CategoriaFormPage/>}/>
       </Routes> 
    </BrowserRouter>
  )


}

export default App
