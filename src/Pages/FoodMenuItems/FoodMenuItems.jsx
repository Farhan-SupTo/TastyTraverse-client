import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../hooks/UseMenu";

const FoodMenuItems = () => {

    const [menu] =useMenu()
    const PopularMenuItems = menu.filter(item=> item.category === 'popular')


// const [menu,setMenu] =useState([])

// useEffect(()=>{
//     fetch('menu.json')
//     .then(res=>res.json())
//     .then(data=>{
//         const PopularMenuItems =data.filter(item=> item.category === 'popular')
//         setMenu(PopularMenuItems)
//     })
// },[])


    return (
<section className="mb-12">
<SectionTitle   headings={"FROM OUR MENU"}
            subHeadings={"Checked it Out"}
            >
          
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
           {
             PopularMenuItems.map(item=> <MenuItems
             key={item._id} item={item}>
             </MenuItems>)
           }
        </div>
        <div className="text-center">
        <button className="btn btn-outline border-0 mt-4 border-b-4">Order Now</button>
        </div>
</section>
    );
};

export default FoodMenuItems;