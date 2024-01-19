import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import UseCart from "../../../hooks/UseCart";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_token);
const Payment = () => {
  const [cart] =UseCart()
  const Total = cart.reduce((sum, item) => item.price + sum, 0);
  const price =Math.round(Total.toFixed(2))
  // Math.round(Total.toFixed(2))

  return (
    <div className="w-full px-5">
      <Helmet>
        <title>Tasty Traverse | Payment</title>
      </Helmet>
      <SectionTitle
        headings="Payment"
        subHeadings="Please provide"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}>
            </CheckOutForm>
            </Elements>
            
    </div>
    
  );
};

export default Payment;
