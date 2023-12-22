import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({item,title,img}) => {
    return (
        <div>
            
            {title && <Cover img={img} title={title}></Cover>}
        
<div className="grid md:grid-cols-2 gap-10 my-20 p-16">
           {
             item.map(item=> <MenuItems
             key={item._id} item={item}>
             </MenuItems>)
           }
           
        </div>
        <Link to={`/order/${title}`}><button className="btn btn-outline bg-slate-200 items-center border-0 border-b-4">Order Now</button></Link>
        
        
            
        </div>
    );
};

export default MenuCategory;