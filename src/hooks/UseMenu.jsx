import { useQuery } from "@tanstack/react-query"

const useMenu = ()=>{
//     const [menu,setMenu] =useState([])
//     const [loading,setLoading] =useState(true)

// useEffect(()=>{
//     fetch('https://tasty-traverse-server.vercel.app/menu')
//     .then(res=>res.json())
//     .then(data=>{
//         setMenu(data)
//         setLoading(false)
//     })
// },[])

    //  use tanstack query

    const {data: menu =[], isLoading:loading, refetch} =useQuery({
        queryKey:['menu'],
        queryFn: async() =>{
            const res =await fetch('https://tasty-traverse-server.vercel.app/menu')
            return res.json()
        }
    })


      return [menu,loading,refetch]
}
export default useMenu