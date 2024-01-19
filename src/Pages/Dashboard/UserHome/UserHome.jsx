import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} =useAuth()
    return (
        <div className="m-4 w-full">
            <h1 className="text-3xl px-5 uppercase">welcome back, {user.displayName}</h1>
        </div>
    );
};

export default UserHome;