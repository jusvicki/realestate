import image3 from '../assets/IMG_9500.PNG';
import image1 from '../assets/IMG_9499.PNG'


const Projects = () => {
       const backGround={
        backgroundImage:`url(${image1})`,
        height:'100vh',
        width:'100%',
        position:'relative',
     backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
       }
    return ( <div id='projects' className='service' style={backGround}>
<div className='myproject justify-content-center' style={{position:'absolute'}}>
<h1 className='wordservices text-center' style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'}}>Projects</h1>
<div className='row pinnockcol'>
<div className='col-6'>
<div className='pinline'>
<div className='line1' style={{border:'0.2rem solid #151E3D'}}></div>
<p className='pinnock'><h1>PINNOCK </h1><span><h1>BEACH</h1>
<p>A well planned housing project built by Foresight reality partners at,</p>
<p>PINNOCK BEACH ESTATE,LEKKI.</p></span></p>
<div className='line2' style={{border:'0.2rem solid #151E3D'}}></div>
</div>
</div>
<img className='pinnockpic img-fluid col-6' src={image3} alt="" />
</div>
</div>
    </div> );
}
 
export default Projects;