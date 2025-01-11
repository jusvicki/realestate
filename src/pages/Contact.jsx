import image4 from '../assets/PHOTO-2024-07-01-17-05-03.JPG';
import Header from '../components/header';


const Contact = () => {
    return ( <>
    <Header />
    <div id='contact' style={{backgroundColor:'#151E3D'}} >
        <div className='container'>
   <div className='maintouch row' style={{display:'flex'}}>
        <div className='touch col-6 col' style={{color:'white'}}>
       <h1 className='touchtopic'>Get in Touch</h1>
       <div className='touchword'>
       <p>Email: <br/>hello@bolajiaderibigbe.com</p>
       <p>Office Address: <br /> 38b,Raymond Njoku Street,Off Awolowo Road,Ikoyi, <br />Lagos,Nigeria</p>
       <p>Follow me on social media</p>
       </div>
       <div>
       <a  className='socials allmedia' href="https://www.facebook.com/share/1BYzNEtgjk/?mibextid=LQQJ4d"><i className='bx bxl-facebook text-white'></i></a>
       <a  className='socials allmedia' href="https://www.instagram.com/aderibigbe_bolaji?igsh=MWRwZ205OWFtZ3VqOQ=="><i className='bx bxl-instagram text-white'></i></a>
       <a className='allmedia' href="https://ng.linkedin.com/in/bolaji-aderibigbe-74723b1b1"><i className='bx bxl-linkedin-square text-white'></i></a>
       </div>
       </div>
       <img src={image4} alt="" className='touchimage rounded img-fluid col-6'/>
 </div>
    </div> 
    </div>
    </>
    );
}
 
export default Contact;