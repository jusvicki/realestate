import charity3 from '../assets/238fd894-5e28-4da3-822a-155b68125ef2.jpg';
import charity1 from '../assets/c9662b5d-3a40-47e4-895e-990e84afd711.jpg';
import charity2 from '../assets/04d068ca-590c-46c1-86c0-e640115c6a40.jpg';
import charity4 from '../assets/1c8585a6-642f-4087-88bd-1244326c537c.jpg';
import charity5 from '../assets/0b5663b0-5961-423f-a8d5-c919f4ad6958.jpg';
import Header from '../components/header';

const  Charity= () => {
    return ( <>
      <Header/>
      <div id='charity'>
        <div className=' container'>
          <div className='row'>
       <img  className='charity1 img-fluid' src={charity1} alt="" />
       <img className='charity2 img-fluid ' src={charity2} alt="" />
    </div>
    </div>
<div className='caris'>
    <p className=''>CARIS is an initiative of Bolaji Aderibigbe, it is more than an organization; it is a movement driven by the belief that everyone deserves a chance to shine. , Charity Organization “A” emerged as a beacon of light, dedicated to bringing hope and transformation to those in need. Born from a profound commitment to illuminate the path for individuals who have been left in the shadows, our organization focuses on uplifting widows, street boys, and other marginalized communities. He believes in the inherent potential of every individual and work tirelessly to unlock it. Our success stories are a testament to the power of hope and the transformative effect of a supportive community.
</p>
<p>Creating a safe space for Widows to heal and rebuild their lives, offering
emotional support and practical resources to help them regain their
independence. Our programs for street boys focus on education and
rehabilitation, guiding them from a life of hardship to one of opportunity and self-
worth. By creating a nurturing environment where they can learn, grow, and dream,
we aim to break the cycle of poverty and neglect.</p>
<p>We invite you to join us on this journey of compassion and change. Together, we
can shine a light in the darkest corners and make a lasting difference in the lives of
those who need it most. If you like to be a part of our story and help us continue to
be a beacon of hope for those who need it most. Kindly reach out</p></div>







        <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={charity3} className="d-block mx-auto img-fluid w-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={charity4} className="d-block mx-auto img-fluid w-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={charity5} className="charit d-block mx-auto img-fluid w-50" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
   </div>
    </div>
    </>
    );
}
 
export default Charity;