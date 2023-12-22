
import aboutImg from '../../assets/home/chef-service.jpg'

const AboutBangBang = () => {
    return (
        <div className='my-16 relative w-[1280px]'>
            <img src={aboutImg} alt="" />
            <div className=' text-center transform bottom-16 mx-16 my-8 p-12 bg-white absolute'>
                <h2 className=' text-center text-3xl p-4 uppercase'>Tasty Traverse</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod facere adipisci, autem doloremque modi alias iste voluptatum obcaecati atque ipsam quia dolor laboriosam, eaque odio, expedita delectus voluptas enim fugiat rem est nam! Eaque praesentium, doloribus asperiores odit quam quisquam autem quasi recusandae voluptatem eius tenetur cumque, aperiam totam?</p>
            </div>
        </div>
    );
};

export default AboutBangBang;