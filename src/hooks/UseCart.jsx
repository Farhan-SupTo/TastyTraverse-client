import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'


const UseCart = () =>{
    const {user,loading} =useAuth()
    // const token =localStorage.getItem('access token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch,data: cart =[]} = useQuery({
        queryKey: ['cart',user?.email],
        enabled: !loading,
        // queryFn: async ()=>{
        //     const res = await fetch(`https://tasty-traverse-server.vercel.app/carts?email=${user.email}`,{
        //         headers:{
        //             authorization:`bearer ${token}`
        //         }
        //     })
        //     return res.json()

        // }
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        }
        
      })
      return [cart,refetch]

}
export default UseCart