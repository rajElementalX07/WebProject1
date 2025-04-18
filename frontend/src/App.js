import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import { Toaster } from 'react-hot-toast';
import {  Route, Routes,  } from 'react-router-dom';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import PdfUploaderPage from './pages/PdfUploaderPage';
import CollegeData from './pages/CollegeData';
import PartBData from './pages/PartBData';

function App() {
  useEffect(()=>{
        
    Aos.init();

},[]);

  return (
    <>
    <Toaster position="top-center"  reverseOrder={false} toastOptions={{duration: 5000}}/>
   <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}  />   
      <Route path='/auth/user-login' element={<AuthPage/>}  />   
      <Route path='/auth/user-reg' element={<AuthPage/>}  />   
      <Route path='/auth/upload' element={<PdfUploaderPage/>}  />   
      <Route path='/auth/clg-data' element={<CollegeData/>}  />   
      <Route path='/auth/part-b-data' element={<PartBData/>}  />   
      <Route path='*' element={<NotFound/>}  />   
    </Routes>
    </>
  );
}

export default App;
