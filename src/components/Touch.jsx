import image4 from '../assets/PHOTO-2024-07-01-17-05-03.JPG';
import facebook from '../assets/icons8-facebook-50.png';
import instagram from '../assets/icons8-instagram-50.png';
import linkedin from '../assets/icons8-linkedin-50.png'


const Touch = () => {
    
    const touchDesign= {
        backgroundColor:'#151E3D',
    };
    
    const main= {
        display:'flex',
        color:'white'
    };
    
    
    return ( 
            <div id='contact' style={touchDesign} className='touchpage'>
        <div className='container'>
   <div className='maintouch row' style={main}>
        <div className='touch col-6' >
  <h1 className='touchtopic'>Get in Touch</h1>
       <div className='touchword'>
       <p>Email: <br/>hello&#64;bolajiaderibigbe.com</p>
       <p>Office Address: <br /> 38b,Raymond Njoku Street,Off Awolowo Road,Ikoyi, <br />Lagos,Nigeria</p>
       <p>Follow me on social media</p>
       </div>
       <div>
       <a  className='socials allmedia' href="https://www.facebook.com/share/1BYzNEtgjk/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
       <img src={facebook} alt="Facebook" className='media' />
       </a>
       <a  className='socials allmedia' href="https://www.instagram.com/aderibigbe_bolaji?igsh=MWRwZ205OWFtZ3VqOQ==" target="_blank" rel="noopener noreferrer">
       <img src={instagram} alt="Instagram" className='media'/>
       </a>
       <a className='allmedia' href="https://ng.linkedin.com/in/bolaji-aderibigbe-74723b1b1" target="_blank" rel="noopener noreferrer">
       <img src={linkedin} alt="Linkedin" className='media'/>
       </a> 
       </div>

       </div>
       <img src={image4} alt="" className='touchimage rounded img-fluid col-6'/>
       </div>
       </div>
       </div>

    
    );
}
 
export default Touch;