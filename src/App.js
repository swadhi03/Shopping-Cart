import logo from './logo.svg';
import './App.css';
import AddShop from './components/AddShop';
import SearchShop from './components/SearchShop';
import DeleteShop from './components/DeleteShop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddShop/>}/>
          <Route path='/search' element={<SearchShop/>}/>
          <Route path='/delete' element={<DeleteShop/>}/>
          <Route path='/view' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
