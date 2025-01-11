import project1 from '../assets/IMG_9567.jpg';
import project2 from '../assets/IMG_9572.jpg';
import project3 from '../assets/IMG_9574.jpg';
import project4 from '../assets/IMG_9575.jpg';
import project5 from '../assets/PHOTO-2025-01-12-20-22-35.jpg';
import project6 from '../assets/PHOTO-2025-01-12-20-22-40.jpg';
 import project7 from '../assets/IMG_9501.PNG';
 import project8 from '../assets/IMG_9503.PNG';
 import project9 from '../assets/IMG_9500.PNG';
import Header from '../components/header';


const Mainpro = () => {
    return ( <>
    <Header />
    <div>
        <div className='protitle text-center'>Projects</div>
        <p className='ongoing text-center'>Ongoing Projects</p>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={project1} className="d-block w-100 pro" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={project2} className="d-block w-100 pro" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={project3} className="d-block w-100 pro" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={project4} className="d-block w-100 pro" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='row'>
<p className='text-center island'>1403 Emporium</p>
<img src={project5} className='col proimages' alt="" />
<p className='text-center island'>1404 Mews</p>
<img src={project6} className='col proimages' alt="" />
<p className='text-center island'>Victoria Island</p>
<img src={project7} className='col proimages' alt="" />
<p className='text-center island'>Omole Phase</p>
<img src={project8} className='col proimages' alt="" />
<p className='text-center island'>Pinnock Estate</p>
<img src={project9} className='col proimages' alt="" />
</div>
    </div>
    </> );
}
 
export default Mainpro;