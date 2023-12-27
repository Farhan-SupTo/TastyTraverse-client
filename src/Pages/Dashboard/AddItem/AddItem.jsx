
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting =import.meta.env.VITE_image_upload_token

const AddItem = () => {
  
    const { register, handleSubmit,reset} = useForm();
    const [axiosSecure] = useAxiosSecure()
    const image_hosting_Url =`https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting}`
    const onSubmit = data => {
      const formData =new FormData()
      formData.append('image',data.image[0])

      fetch(image_hosting_Url,{
        method:'POST',
        body: formData
      })
      .then(res=>res.json())
      .then(imageResponse=>{
        if(imageResponse.success){
          const imageURL =imageResponse.data.display_url
          const {name, recipe,category,Price} =data
          const newItem ={name,recipe,image:imageURL,category,price:parseFloat(Price)}
          // console.log(newItem)
          axiosSecure.post('/menu',newItem)
          .then(data=>{
            console.log('after posting new menu item',data.data)
            if(data.data.insertedId){
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Items added successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
          
          })

        }
      })
     
      console.log(data)
    };
    // console.log(image_hosting)
    // console.log(errors);
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Tasty Traverse | Add item</title>
      </Helmet>
      <SectionTitle
        subHeadings="Whats New?"
        headings="Add an item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label font-semibold">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", {required: true, maxLength: 80})}
            className="input input-bordered w-full"
          />
        </label>
        <div className="md:flex w-full my-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select defaultValue='Pick One' className="select select-bordered" {...register("category", { required: true })}>
              <option disabled>
              Pick One
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Desi</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </label>
          <label className="form-control w-full ml-2">
          <div className="label font-semibold">
            <span className="label-text">Price*</span>
          </div>
          <input
            type="number"
            placeholder="Price"
            {...register("Price", {required: true, maxLength: 80})}
            className="input input-bordered w-full"
          />
        </label>

        </div>
        <label className="form-control my-4">
  <div className="label">
    <span className="label-text font-semibold">Recipe Details*</span>
  </div>
  <textarea  {...register("recipe", {required: true, maxLength: 80})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</label>
<label className="form-control w-full mt-2 max-w-xs">

  <input type="file" className="file-input file-input-bordered w-full" {...register("image", {required: true, maxLength: 80})}/>

</label>

    
<input className="btn bg-[#D1A054] mt-2" type="submit" value="ADD ITEM"  />


      </form>
    </div>
  );
};

export default AddItem;
