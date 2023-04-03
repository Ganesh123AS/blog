import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import ErrorPage from './components/errorPage';
import SinglePage from './components/singlePage';
import About from './components/about';
import Contact from './components/contact';
import Carrier from './components/carrier';
import Blog from './components/blog';
import Posts from './pages/posts';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import AddPost from './components/addPost';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/posts" element={ <Posts /> } />        
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="/carrier" element={ <Carrier /> } />
        <Route exact path="/posts/:id" element={ <SinglePage /> } />
        <Route exact path="/blog" element={ <Blog /> } />
        <Route exact path="*" element={ <ErrorPage /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/addpost" element={ <AddPost /> } />
      </Routes>
    <Footer />
    </>
  );
}

export default App;