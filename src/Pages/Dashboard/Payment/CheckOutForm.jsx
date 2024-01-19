import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckOutForm.css'
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutForm = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] =useState('')
    const [axiosSecure] =useAxiosSecure()
    const {user} =useAuth()
    const [clientSecret,setClientSecret] =useState('')
    const [processing,setProcessing] =useState(false)
    const [transactionId,setTransactionId] =useState('')
    const location =useLocation()
    const navigate =useNavigate()

    const  from = location.state?.from?.pathname || "/";


    useEffect(()=>{
if(price > 0){
  axiosSecure.post('/create-payment-intent',{price})
  .then(res=>{
   console.log(res.data.clientSecret)
   setClientSecret(res.data.clientSecret)
  })
}
    },[price,axiosSecure])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        console.log('card',card)
        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
          }
setProcessing(true)
          const {paymentIntent, error:ConfirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email:user?.email || 'unknown'
                },
              },
            },
          );
          if(ConfirmError){
            console.log(ConfirmError)
          }
          console.log('payment intent',paymentIntent)
          setProcessing(false)
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            const payment ={ email:user?.email,
            transactionId :paymentIntent.id,
            price,
            date:new Date(),
            quantity:cart.length,
            ItemName:cart.map(item=>item.name),
            cartItems:cart.map(item=>item._id),
            menuItems:cart.map(item=>item.foodMenuID),
            status:'service pending'
  
            }
            axiosSecure.post('/payments',payment)
            .then(res=>{
              console.log(res.data)
              if(res.data.insertResult.insertedId){
          //  console.log("hello")
              }
              navigate(from, { replace: true });
            })
         
          }

    }
        
    return (
        <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-warning mt-3 w-16 text-gray-700" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        
      </form>
      
      
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      
      {transactionId && <p className="text-green-500">Transaction complete with transactionId:{transactionId}</p> }
      
      
        </>
    );
};


export default CheckOutForm;