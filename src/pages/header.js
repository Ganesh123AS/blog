import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./pages.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-color">
  <div className="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/carrier">Carrier</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addpost">Add Post</Link>
        </li>
        
      </ul>
      <div className="button d-flex">
        <Link to="/login"><button className='btn btn-outline-success' type="submit">Login</button></Link>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;