import logo from '../assets/Modern Monogram FA Logo - 1.png';
import { Link } from 'react-router-dom';


const Header = () => {
 return (  
  <>
       <section id='home' className='header'>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="company logo" className='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mx-5 gap-3">
        <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/about' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/mainpro' className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='/charity' className="nav-link">Charity</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link">Contact</Link>
        </li>
      </ul>
      </div>
      </div>
  </nav>
</section>

</>
);
}
 
export default Header;