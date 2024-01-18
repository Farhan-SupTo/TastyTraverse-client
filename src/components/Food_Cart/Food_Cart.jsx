import  { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';

const Food_Cart = ({item}) => {
  const {name,recipe,image,price,_id} = item
  const {user} =useContext(AuthContext)
  const navigate =useNavigate()
  const [,refetch] =UseCart()
  const location =useLocation()

         const handleAddtoCart = item =>{
console.log(item)
if(user && user.email){
  const OrderCartItem ={foodMenuID:_id,name,image,price,email:user.email}
  fetch('https://tasty-traverse-server.vercel.app/carts',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(OrderCartItem)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      refetch()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Food has added to cart",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}
else{
  Swal.fire({
    title: "Please login to Order",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Login Now!"
  }).then((result) => {
    if (result.isConfirmed) {
navigate('/login',{state:{ from: location }})
    }
  });
}
         }

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
            <button onClick={()=>handleAddtoCart(item)} className="btn btn-outline hover:btn-neutral uppercase border-b-4 bg-slate-200 border-b-yellow-700 text-yellow-700 border-0">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Food_Cart;