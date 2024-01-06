import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListStagiaire from './components/stagiaire/ListStagiaire';
import DetailStagiaire from './components/stagiaire/DetailStagiaire';
import AddStagiaire from './components/stagiaire/AddStagiaire';
import Header from './components/Header';
import StagiaireApi from './components/stagiaire/StagiaireApi';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListStagiaire/>}></Route>
        <Route path='/add' element={<AddStagiaire/>}></Route>
        <Route path='/:nom' element={<DetailStagiaire/>}></Route>
        <Route path='/3asboss' element={<StagiaireApi/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
