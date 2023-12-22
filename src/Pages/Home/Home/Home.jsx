
import { Helmet } from 'react-helmet-async';
import AboutBangBang from '../../../components/AboutBangBang/AboutBangBang';
import FoodMenuItems from '../../FoodMenuItems/FoodMenuItems';
import Banner from '../Banner/Banner';
import CallSection from '../CallSection/CallSection';
import Category from '../Category/Category';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonial from '../Testimonials/Testimonial';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Helmet>
              <title>Tasty Traverse | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <AboutBangBang></AboutBangBang>
            <FoodMenuItems></FoodMenuItems>
            <CallSection></CallSection>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;