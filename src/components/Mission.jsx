import { useNavigate } from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the /about page
    navigate('/about');
    
    // Ensure that after navigating, we scroll to the top of the page
    // This can be done by using window.scrollTo() or document.getElementById() if you want to target a specific element
    window.scrollTo(0, 0); // This will scroll to the top of the page
  };

  return (
    <>
      <div className='container-fluid mission' style={{backgroundColor:'#151E3D'}}>
        <div className="container">
          <h2 className="fore text-light text-center text-nowrap">
            Foresight. Vision. Execution
          </h2>
          <p className="foreword text-center mt-4 text-light mb-15 text-wrap forelarge">
            A visionary real estate developer and investor with a proven track record of <br />
            delivering high-quality projects that exceed expectations. As the Founder <br />
            and Managing Partner of Foresight Reality Partners, he has established <br />
            himself as a leader in the industry, known for his innovative approach,<br />
            strategic thinking, and commitment to excellence.
          </p>
          <p className="foreword text-center mt-3 text-light mb-15 text-wrap foresmall">
            A visionary real estate developer and investor with a proven track record of 
            delivering high-quality projects that exceed expectations. <br /> As the Founder 
            and Managing Partner of Foresight Reality Partners, he has established 
            himself as a leader in the industry, known for his innovative approach,
            strategic thinking, and commitment to excellence.
          </p>
          <button
            onClick={handleClick}
            className="btn-light seebutton rounded-pill mx-auto d-flex p-2 px-4 border-0 text-center align-items-center justify-content-center fw-bolder"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Mission;
