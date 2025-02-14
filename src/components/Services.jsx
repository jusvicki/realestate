 import image2 from '../assets/IMG_9498.PNG';
import images1 from '../assets/premium_photo-1681691911660-a40d4163ed9f.avif';
import images2 from '../assets/hand-holding-house-real-estate-property-model_53876-129010.avif';
import images3 from '../assets/real-estate-agent-customer-signing-contract-buy-house-insurance-loan-real-estaterent-houseget-insurance-loan-real-estate-property_265022-37689.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
  const backgroundStyle = {
    backgroundImage: `url(${image2})`,
    position: 'relative',
    height: '55rem',
    width:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const image = {
    backgroundImage: `url(${images1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    transform: 'scaleY(1.2)',
  };

  const imag = {
    backgroundImage: `url(${images2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    transform: 'scaleY(1.2)',
  };

  const ima = {
    backgroundImage: `url(${images3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    transform: 'scaleY(1.2)',
  };

  return (
    <>
    <div style={backgroundStyle} className="service servicepage ">
      <div className="myservice" style={{ position: 'absolute', width: '100%' }}>
        <h1
          className="wordservices text-center mb-5"
          style={{
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            fontSize: '3rem', 
          }}
        >
          Services
        </h1>
        <div className=" d-flex flex-wrap props row text-center gap-4 justify-content-center align-items-center">
         
          <div className=" cad card border-0 col-12 col-md-4 img-fluid" style={image}>
            <Link to="/mainservice#construction" className="property my-5 text-center text-white" >
              Property Construction
            </Link>
          </div>

          
          <div className="cad card border-0 col-12 col-md-4 img-fluid"  style={imag} >
            <Link to="/mainservice#management" className="property my-5 text-white">
              Property Management
            </Link>
          </div>

      
          <div  className="cad card border-0 col-12 col-md-4 img-fluid" style={ima} >
            <Link to="/mainservice#consultation" className="property my-5 text-white" >
              Property Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;