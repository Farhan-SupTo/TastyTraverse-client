import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
    const [reviews,setReviews] =useState([])
   
      useEffect(()=>{
        fetch('https://tasty-traverse-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
      },[])
   
  return (
    <section className="my-20">
    
    <SectionTitle
        headings={"TESTIMONIALS"}
        subHeadings={"What Our Clients Say"}
      ></SectionTitle>
      <div className="mx-2">
    
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-gray-200 rounded-lg">
        
        {
            reviews.map(review=> <SwiperSlide
            key={review._id}
            >
                <div className="text-center py-8">
                
                <Rating className="mx-auto pb-2"
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
 <FontAwesomeIcon className="text-7xl text-[#CD9003] mx-auto pb-2" icon={faQuoteLeft} style={{color: "#020203",height:"100"}} />
                   
                    <p className="px-6 lg:px-[100px] text-gray-600">{review.details}</p>
                    <p className="text-2xl text-[#CD9003] font-semibold p-2 uppercase">{review.name}</p>
                </div>

            </SwiperSlide>)
        }
      </Swiper>
      </div>

    </section>
  );
};

export default Testimonial;
