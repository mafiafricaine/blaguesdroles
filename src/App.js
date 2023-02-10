import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Blagues from './pages/Blagues';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Erreur from './pages/Erreur';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil/>}  />
      <Route path='/blagues' element={<Blagues/>}/>
      <Route path='/galerie' element={<Galerie/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Erreur/>}/>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
