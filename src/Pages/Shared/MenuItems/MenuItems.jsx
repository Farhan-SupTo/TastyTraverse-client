const MenuItems = ({item}) => {
    const {name,recipe,image,price,_id} = item
    return (
        <div className="flex space-x-2">
            <img className="w-[104px]" src={image} alt="" />
            <div>
                <h2 className="text-xl uppercase font-medium">{name}---------</h2>
                <p className="text-base text-slate-500">{recipe}</p>
            </div>
            <h2 className="text-orange-400">${price}</h2>
            
        </div>
        
    );
};

export default MenuItems;