import image4 from '../assets/PHOTO-2024-07-01-17-05-03.JPG';
import { Link } from 'react-router-dom';
import facebook from '../assets/icons8-facebook-50.png';
import instagram from '../assets/icons8-instagram-50.png';
import linkedin from '../assets/icons8-linkedin-50.png'


const Touch = () => {
    return ( 
    <div id='contact' style={{backgroundColor:'#151E3D'}} className='touchpage'>
        <div className='container'>
   <div className='maintouch row' style={{display:'flex'}}>
        <div className='touch col-6' style={{color:'white'}}>
       <h1 className='touchtopic'>Get in Touch</h1>
       <div className='touchword'>
       <p>Email: <br/>hello@bolajiaderibigbe.com</p>
       <p>Office Address: <br /> 38b,Raymond Njoku Street,Off Awolowo Road,Ikoyi, <br />Lagos,Nigeria</p>
       <p>Follow me on social media</p>
       </div>
       <div>
       <Link  className='socials allmedia' to="https://www.facebook.com/share/1BYzNEtgjk/?mibextid=LQQJ4d">
       <img src={facebook} alt="" /></Link>
       <Link  className='socials allmedia' to="https://www.instagram.com/aderibigbe_bolaji?igsh=MWRwZ205OWFtZ3VqOQ==">
       <img src={instagram} alt="" />
       </Link>
       <Link className='allmedia' to="https://ng.linkedin.com/in/bolaji-aderibigbe-74723b1b1">
       <img src={linkedin} alt="" />
       </Link> 
       </div>
       </div>
       <img src={image4} alt="" className='touchimage rounded img-fluid col-6'/>
 </div>
    </div> 
    </div>
    );
}
 
export default Touch;