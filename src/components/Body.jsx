import image1 from '../assets/PHOTO-2024-07-01-17-05-02.jpg';
import { useNavigate } from 'react-router-dom';
import Header from './header';




const Body = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mainpro');
    };

    const myStyle = {
        backgroundImage: `url(${image1})`,  // Correct syntax: use backticks to create a template literal
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        height: '33rem',
        maxWidth: '100rem',
    };

    return (
      <>
       <Header/>
        <div style={myStyle} className='d-flex img-fluid firstimage'>
            <div className='firstcontent content1'>
                <h1 style={{ color: '#151E3D' }}>
                    Hello, I&rsquo;m <br /> Bolaji Aderibigbe
                </h1>
                <p>I am a seasoned Real Estate <br /> Developer + Realtor</p>
                <button onClick={handleClick} className="rounded-pill p-2 mt-4 text-white">
                    View My Portfolio
                </button>
            </div>
        </div>
        </>
    );
}

export default Body;
