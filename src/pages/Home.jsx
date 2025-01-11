import Header from '../components/header.jsx';
import Mission from '../components/Mission.jsx' ;
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';
import Touch from '../components/Touch.jsx';
import Feedback from '../components/Feedback.jsx';
import Body from '../components/Body.jsx';

const Home = () => {
    return ( <>
     <Header />
     <Body />
     <Mission />
     <Services />
     <Projects />
     <Feedback />
     <Touch />
    </> );
}
 
export default Home;