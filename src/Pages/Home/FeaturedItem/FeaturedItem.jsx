import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage1 from "../../../assets/home/featured.jpg";
import './FeaturedItem.css'

const FeaturedItem = () => {
  return (
    <section className="my-20 bg-fixed pt-10 featuredBgImage text-white">
     <div className="w-1/3 mx-auto">
     <SectionTitle
        headings={"Featured item"}
        subHeadings={"Checked it Out"}
      ></SectionTitle>
     </div>
      <div className="flex items-center justify-center bg-slate-500 bg-opacity-60 pb-20 px-36">
        <div>
          <img src={featuredImage1} alt="" />
        </div>
        <div className="md:ml-10">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet. Ab quasi laborum nihil excepturi facere, tempore minus minima molestiae optio sequi illo placeat quo eligendi commodi. Aut accusantium enim nesciunt accusamus molestiae, consectetur esse in cumque voluptate, repudiandae tenetur?</p>
            <button className="btn btn-outline border-0 mt-4 border-b-4">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
