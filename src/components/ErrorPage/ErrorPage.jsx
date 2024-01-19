import { useRouteError } from "react-router-dom";
import errorPage from '../../assets/404.gif'
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar/>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <img src={errorPage} className="m-auto" alt="" />
      </div>
      <Footer/>
    </div>
  );
}