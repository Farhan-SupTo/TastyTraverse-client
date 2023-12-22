// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import sliderImg1 from '../../../assets/home/slide1.jpg'
import sliderImg2 from '../../../assets/home/slide2.jpg'
import sliderImg3 from '../../../assets/home/slide3.jpg'
import sliderImg4 from '../../../assets/home/slide4.jpg'
import sliderImg5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AboutBangBang from '../../../components/AboutBangBang/AboutBangBang';

const Category = () => {
    return (
    <section>
        <SectionTitle   headings={"Order Online"}
            subHeadings={"From 11:00am to 10:00pm"}
            >
          
        </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='mb-10'>
            <img src={sliderImg1} alt="" />
            <h3 className=' uppercase text-center text-4xl -mt-16 text-white shadow-md'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg2} alt="" />
            <h3 className=' uppercase text-center text-4xl -mt-16 text-white shadow-md'>pizzas</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg3} alt="" />
            <h3 className=' uppercase text-center text-4xl -mt-16 text-white shadow-md'>Soup</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg4} alt="" />
            <h3 className=' uppercase text-center text-4xl -mt-16 text-white shadow-md'>Desert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg5} alt="" />
            <h3 className=' uppercase text-center text-4xl -mt-16 text-white shadow-md'>salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
    
    );
};

export default Category;