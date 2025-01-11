import { useNavigate } from "react-router-dom";



const  Mission = () => {
 const navigate= useNavigate();

const handleClick= () => {
   navigate('/about');
};

    return (  
     <> 
     <div  className='container-fluid mission' style={{backgroundColor:'#151E3D'  }}> 
        <div className="container">
         <h2 className="fore text-light text-center text-nowrap" >Foresight. Vision. Execution</h2>
         <p className="foreword text-center mx-auto mt-4 text-light mb-15 text-nowrap">A visionary real estate developer and investor with a proven track record of <br />
         delivering high-quality projects that exceed expectations. As the Founder <br />
         and Managing Partner of Foresight Reality Partners, he has established <br />
         himself as a leader in the industry, known for his innovative approach,<br />
         strategic thinking, and commitment to excellence.</p>
        <button onClick={handleClick} className="btn btn-light seebutton rounded-pill mx-auto text-primary-700 d-flex p-2 px-4 border-0 text-center align-items-center justify-content-center fw-bolder" data-bs-toggle="button">See More</button>
         </div>
         </div>
        </>
    );
}
 
export default  Mission;