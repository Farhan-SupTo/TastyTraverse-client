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
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
      },[])
   
  return (
    <section className="my-20">
    <div className="w-1/3 mx-auto">
    <SectionTitle
        headings={"TESTIMONIALS"}
        subHeadings={"What Our Clients Say"}
      ></SectionTitle>
    </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide></SwiperSlide>
        {
            reviews.map(review=> <SwiperSlide
            key={review._id}
            >
                <div className="px-24 mx-24 flex flex-col items-center text-center">
                
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
 <FontAwesomeIcon className="pt-10" icon={faQuoteLeft} style={{color: "#020203",height:"100"}} />
                   
                    <p className="py-5">{review.details}</p>
                    <p className="text-orange-400 text-2xl">{review.name}</p>
                </div>

            </SwiperSlide>)
        }
      </Swiper>

    </section>
  );
};

export default Testimonial;
