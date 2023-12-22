import React from 'react';

const Food_Cart = ({item}) => {
    const {name,recipe,image,price,_id} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img src={image} alt="Shoes" className="rounded" />
        </figure>
        <p className='bg-black text-white absolute ml-28 px-3 py-2 rounded top-12  right-5'>${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline hover:btn-neutral uppercase border-b-4 bg-slate-200 border-b-yellow-700 text-yellow-700 border-0">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Food_Cart;