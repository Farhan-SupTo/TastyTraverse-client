import { useQuery } from "@tanstack/react-query";



const AllUsers = () => {

    //  const {refetch,data: users= [] } =useQuery(["users"], async () =>{
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json()
    
    //  })
     const { refetch,data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users`)
            return res.json()

        }
      })

    return (
        <div>
           <h3 className='text-4xl'>Total user: {users.length}</h3>
        </div>
    );
};

export default AllUsers;