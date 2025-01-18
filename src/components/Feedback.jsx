import team from '../assets/premium_photo-1661575413688-07defd7f769d.avif';

const Feedback = () => {
    const backgroundStyle = {
        backgroundImage: `url(${team})`,
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={backgroundStyle} className='teambackground'>
            <div className='feedback justify-content-center align-items-center text-center' style={{ position: 'absolute', width: '100%' }}>
                <div className='feed'>
                    <p className="clients" style={{ color: '#EFBF04', fontSize: '4vw' }}>Feedback from Clients</p>
                    <p className="people" style={{ color: '#EFBF04', fontSize: '2vw' }}>What people are saying about Bolaji Aderibigbe</p>
                </div>

                
                    <div className="d-flex row gap-2 text-center justify-content-center align-items-center">
                        <div className="mycard card card1 col-12 col-md-3" style={{ border: '0.1rem solid #FFD700' }}>
                            <div className="card-body">
                                <p className="card-text text-white">I contacted Bolaji to help build my private dwelling and he delivered spot on. An outstanding professional delivering to taste.
                                    <p className='names names1'> -Mr Sanni</p>
                                </p>
                            </div>
                        </div>

                        <div className="mycard card card1 col-12 col-md-3" style={{ border: '0.1rem solid #FFD700' }}>
                            <div className="card-body">
                                <p className="card-text text-white">It&apos;s scary working with developers in Nigeria, but Bolaji worked with our family and built trust by delivering all that was agreed upon, some even before the timeline.
                                    <p className='names names2'>-Mr Akuko</p>
                                </p>
                            </div>
                        </div>

                        <div className="mycard card card1 col-12 col-md-3" style={{ border: '0.1rem solid #FFD700' }}>
                            <div className="card-body">
                                <p className="card-text text-white">Bolaji gave me a stress-free property management service, didn&apos;t have to call him at any point like my previous management. Proactive is the word I will say about his team of professionals.
                                    <p className='names names3'>-Mr Animashaun</p>
                                </p>
                            </div>
                        </div>

                        <div className="mycard card card1 col-12 col-md-3" style={{ border: '0.1rem solid #FFD700' }}>
                            <div className="card-body">
                                <p className="card-text text-white">He sold my house with super fast speed. When we brought Mr Bolaji on board to help sell our property in Osborne, we thought it was going to be a long process. He came and before we knew it, the property was sold.
                                    <p className='names names4'>-Ms Tolu</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Feedback;
