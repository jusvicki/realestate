import { useEffect } from 'react';
import Header from '../components/header';
import images1 from '../assets/premium_photo-1681691911660-a40d4163ed9f.avif';
import images2 from '../assets/hand-holding-house-real-estate-property-model_53876-129010.avif';
import images3 from '../assets/real-estate-agent-customer-signing-contract-buy-house-insurance-loan-real-estaterent-houseget-insurance-loan-real-estate-property_265022-37689.jpg';

const Mainservice = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Use the hash to scroll to the target section
      const section = document.querySelector(window.location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means it runs on component mount

  return (
    <>
      <Header />
      <div>
        <div className='servicetitle display-1 ms-5'>Service</div>
        <div className='serviceline mb-5 ms-5'></div>
        <div className='flex-column container'>
          <p className='propertytitle' id="construction">PROPERTY CONSTRUCTION</p>
          <div className='wordings mt-1'>"Building Dreams from the Ground Up"</div>
          <img className='myimages mx-auto d-block w-100 img-fluid justify-content-center' src={images1} alt="" />
          <p className='servicetext container'>
          Property construction is more than just erecting buildings; it's about crafting spaces where lives unfold and dreams are realized.Bolaji Aderibige and his of dedicated team combines innovative design with meticulous craftsmanship to deliver structures that stand the test of time.From the initial blueprint to the final touches, we ensure that each project reflects our commitment to quality,sustainability,and elegance.Whether it's a residential oasis, a commercial hub, or a mixed-use development,we build with the vision of creating environments that inspire and endure.
          </p>
        </div>

        <div className='flex-column container'>
          <p className='propertytitle' id='management'>PROPERTY MANAGEMENT</p>
          <div className="wordings">"Elevating Property Experiences with Excellence"</div>
          <img className='myimages mx-auto d-block w-100 img-fluid justify-content-center' src={images2} alt="" />
          <p className='servicetext container'>
          Property management services are designed to transform real estate investments into seamless,hassle-free experiences.Bolaji Aderibigbe and his team,manage every aspect of your property with precision
and care, from tenant relations and maintenance to financial management and regulatory compliance.
Our proactive approach ensures that properties are not only well-maintained but also optimized for
maximum value. We act as a reliable steward of your assets,providing peace of mind and allowing you to
enjoy the benefits of your investment without the day-to-day complexities.
          </p>
        </div>

        <div className='flex-column container'>
          <p className='propertytitle' id='consultation'>PROPERTY CONSULTATION</p>
          <div className="wordings">"Guiding Your Real Estate Journey with Expertise."</div>
          <img className='myimages mx-auto d-block w-100 img-fluid justify-content-center' src={images3} alt="" />
          <p className='servicetext container'>
          Navigating the real estate landscape requires insight, experience, and strategic thinking. Bolaji
Aderibigbe provides real estate consultation and transaction services, offering expert guidance every
step of the way. Whether you're buying, selling, or investing, we provide comprehensive advice and
personalized strategies to help you make informed decisions. His in-depth market knowledge and
analytical skills ensure that you achieve optimal outcomes, while commitment to transparency and
integrity fosters trust throughout the transaction process. Let me help you turn your real estate goals
into reality with confidence and ease.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mainservice;
