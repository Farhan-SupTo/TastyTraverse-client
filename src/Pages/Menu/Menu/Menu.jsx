import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/menu-bg.jpg'
import coverImgSalads from '../../../assets/menu/salad-bg.jpg'
import coverImgPizza from '../../../assets/menu/pizza-bg.jpg'
import coverImgSoup from '../../../assets/menu/soup-bg.jpg'
import coverImgDessert from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] =useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const soup = menu.filter(item=> item.category === 'soup')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
             <Helmet>
              <title>Tasty Traverse | Menu</title>
            </Helmet>
            {/* cover image */}
            <Cover img={menuImage} title={'our menu'}></Cover>
            {/* offered menu item */}
           <div className='w-1/3 mx-auto'>
           <SectionTitle subHeadings={"Don't miss"} headings={"Today's offer"}></SectionTitle>
           </div>
           <MenuCategory item={offered}></MenuCategory>
           {/* salad menu item */}
           <MenuCategory
           item={salad}
           title={"salad"}
           img={coverImgSalads}>

           </MenuCategory>
           {/* Pizz menu item */}
           <MenuCategory
           item={pizza}
           title={"pizza"}
           img={coverImgPizza}>

           </MenuCategory>
           {/* Soup menu item */}
           <MenuCategory
           item={soup}
           title={"soup"}
           img={coverImgSoup}>

           </MenuCategory>
           {/* Dessert menu item */}
           <MenuCategory
           item={dessert}
           title={"dessert"}
           img={coverImgDessert}>

           </MenuCategory>
            
        </div>
    );
};

export default Menu;