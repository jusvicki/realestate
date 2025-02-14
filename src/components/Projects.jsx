import image3 from '../assets/IMG_9500.PNG';
import image1 from '../assets/IMG_9499.PNG';

const Projects = () => {
    const backGround = {
        backgroundImage: `url(${image1})`,
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
    };

    return (
        <>
        <div id='projects' className='service myproject1' style={backGround}>
            <div className='myproject justify-content-center' style={{ position: 'absolute', width: '100%' }}>
                <h1
                    className='wordservices text-center'
                    style={{
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                        fontSize: '3rem', // Responsive text size
                    }}
                >
                    Projects
                </h1>
                <div className='row pinnockcol pinrow d-flex flex-row'>
                    <div className='col-12 col-md-6'>
                        <div className='pinline'>
                            <div className='line1' style={{ border: '0.2rem solid #151E3D' }}></div>
                            <div className='pinnock'>
                                <p className='pinnockbeach'>PINNOCK BEACH</p>
                                    <p >
                                    A well-planned housing project built by Foresight reality partners at, PINNOCK BEACH ESTATE,LEKKI.
                                    </p>
                            </div>
                            <div className='line2' style={{ border: '0.2rem solid #151E3D' }}></div>
                        </div>
                    </div>
                     <div className='col-12 col-md-6'>
                        <img className='pinnockpic img-fluid' src={image3} alt="Pinnock Beach Project" />
                    </div> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;

