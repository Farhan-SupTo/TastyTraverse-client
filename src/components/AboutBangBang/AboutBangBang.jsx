
import aboutImg from '../../assets/home/chef-service.jpg'

const AboutBangBang = () => {
    return (
        <div className='mt-[80px] '>
            <div className='relative mx-2'>
            <img className="h-[60vh] md:h-[50vh] w-full" src={aboutImg} alt="" />
            <div className=' absolute bottom-0 m-2 lg:m-12 bg-white bg-opacity-80 p-3 md:p-6 lg:p-12 text-center'>
                <h2 className=' text-xl lg:text-3xl text-[#151515] mb-2'>Tasty Traverse</h2>
                <p className="text-xs md:text-sm text-[#151515]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod facere adipisci, autem doloremque modi alias iste voluptatum obcaecati atque ipsam quia dolor laboriosam, eaque odio, expedita delectus voluptas enim fugiat rem est nam! Eaque praesentium, doloribus asperiores odit quam quisquam autem quasi recusandae voluptatem eius tenetur cumque, aperiam totam?</p>
            </div>
            </div>
        </div>
    );
};

export default AboutBangBang;