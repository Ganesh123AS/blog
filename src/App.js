import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage';
import Blog from './components/blog';
import About from './components/about';
import Contact from './components/contact';
import Carrier from './components/carrier';
import ErrorPage from './components/errorPage';
import Header from './pages/header';
import Footer from './pages/footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={ <HomePage /> } />
      <Route exact path='/blog' element={ <Blog /> } />
      <Route exact path='/about' element={ <About /> } />
      <Route exact path='/carrier' element={ <Carrier /> } />
      <Route exact path='/contact' element={ <Contact /> } />
      <Route exact path='*' element={ <ErrorPage /> } />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
