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
import { Link } from 'react-router-dom';

const Category = () => {
    return (
    <section className=' mb-6 md:mb-none md:my-[80px]'>
        <div className='mx-2'>
        <SectionTitle   headings={"Order Online"}
            subHeadings={"From 11:00am to 10:00pm"}
            >
          
        </SectionTitle>
            <Swiper
            loop={true}
            navigation={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: {
              slidesPerView: 2, // Show only one slide for small screens (320px and up)
            },
            768: {
              slidesPerView: 3, // Show 2 slides for medium screens (768px and up)
            },
            1200: {
              slidesPerView: 4, // Show 4 slides for large screens (1200px and up)
            },
          }}
      >
        <SwiperSlide className='mb-10 relative text-center'>
            <Link to='order/salad'>
            <img className='w-full' src={sliderImg1} alt="" />
            <h3 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>salad</h3>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to='order/pizza'>
            <img className='w-full' src={sliderImg2} alt="" />
            <h3 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>pizzas</h3></Link>
            </SwiperSlide>
        <SwiperSlide>
            <Link to='order/soup'>
            <img className='w-full' src={sliderImg3} alt="" />
            <h3 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Soup</h3></Link>
            </SwiperSlide>
        <SwiperSlide>
            <Link to='order/dessert'>
            <img className='w-full' src={sliderImg4} alt="" />
            <h3 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Desert</h3></Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to='order/drinks'>
            <img className='w-full' src={sliderImg5} alt="" />
            <h3 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>drinks</h3></Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
    
    );
};

export default Category;