import './App.css';
import Homepage from './Componenents/Homepage/Homepage';
import MainPage from './Mainpage/MainPage';
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <MainPage/> : <Navigate to='/login' replace/>}/>
        <Route path='/login' element={user? <Navigate to='/' replace/> : <Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
