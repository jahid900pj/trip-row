import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

function Banner() {
    return (
        <div className=' container-fluid mb-5'>
            <Carousel variant="light">
                <Carousel.Item>
                    <div className='banner-img'>
                        <img
                            className="d-block w-100 "
                            style={{ minHeight: '230px', maxHeight: '650px' }}
                            src="https://www.goarif.com/wp-content/uploads/2019/05/sajek-v-GoArif.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h1>Sajek Valley</h1>
                        <p> kingdom of cloud.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-img'>
                        <img
                            className="d-block w-100"
                            style={{ minHeight: '230px', maxHeight: '650px' }}
                            src="https://www.goarif.com/wp-content/uploads/2021/06/Guliakhali-Sea-Beach-GoArif-scaled-1920x832.jpg "
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <h1>sitakunda Gulia Khali</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-img'>
                        <img
                            className="d-block w-100"
                            style={{ minHeight: '230px', maxHeight: '650px' }}
                            src="https://www.goarif.com/wp-content/uploads/2021/06/Kuakata-Sea-Beach-GoArif-20-1920x1440.jpg.webp"
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <h1>Cox Bazar</h1>
                        <p>World longest beach of the world</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default Banner;