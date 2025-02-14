import image1 from '../assets/PHOTO-2024-07-01-17-05-02.jpg';
import Header from '../components/header';
import Vision from '../pages/Vision';



const About = () => {
    const myStyle= {
        backgroundImage: `url(${image1})`,
        backgroundPosition:'right',
        backgroundSize:'contain',
        height:'33rem',
        maxWidth:'100rem',
        backgroundRepeat:'no-repeat',
  
       }
    return ( <>
        <Header />
    <div id='about' className='container-fluid aboutpage' >
     <div style={myStyle} className='img-fluid aboutimage'>
       <div className='content'>
        <h1 className='about' style={{color:'#151E3D'}}>About</h1>
        <div className='serviceline aboutline'></div>
        </div>
       </div> 
         <Vision />
         </div>
         </>
     );
}
 
export default About;