import React, { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import './PaymentForm.css';


const CheckoutButton: React.FC = () => {
  const stripePromise = loadStripe('pk_test_P3N5vEUYda6Xg4MZM2tWd9PJ00hZgBj5nj');
  const [paymentValid, setPaymentValid] = useState(false);

  const handlePayment = async () => {
    if (!paymentValid) {
      alert('Please enter valid credit card information.');
      return;
    }

    const stripe: Stripe | null = await stripePromise;

    if (!stripe) {
      console.error('Stripe is not initialized');
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      items: [{sku: 'sku_EouPQJ6eEYCU1q', quantity: 1}],
      successUrl: 'https://formhero.com/',
      cancelUrl: 'https://formhero.com/',
    });

    if (error) {
      console.error('Error redirecting to Checkout:', error);
      alert('Error processing payment');
    }
  };

  const handleValidateAndPay = async () => {
    // Perform credit card validation here
    const isValid = validateCreditCard();
    if (isValid) {
      setPaymentValid(true);
      handlePayment(); // Redirect to payment page if card is valid
    } else {
      alert('Please enter valid credit card information.');
    }
  };

  const validateCreditCard = (): boolean => {
    const cardNumber = (document.getElementById('cc-number') as HTMLInputElement)?.value;
    const expDate = (document.getElementById('cc-exp') as HTMLInputElement)?.value;
    const cvc = (document.getElementById('cc-cvc') as HTMLInputElement)?.value;
  
    const isValidCardNumber = validateCardNumber(cardNumber);
    const isValidExpDate = validateExpDate(expDate);
    const isValidCVC = validateCVC(cvc);
  
    return isValidCardNumber && isValidExpDate && isValidCVC; //For testing purposes, if you want to use random credit card numbers please 
                                                              // change the return to ->   return true;
};

const validateCardNumber = (cardNumber: string): boolean => {
    const regex = /^(?:[0-9]{4}[\s-]?){3}[0-9]{4}$/;
    return regex.test(cardNumber);
};

const validateExpDate = (expDate: string): boolean => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // January is 0
    const [inputMonth, inputYear] = expDate.split('/').map((str) => parseInt(str.trim(), 10));
  
    return inputYear > currentYear || (inputYear === currentYear && inputMonth >= currentMonth);
};

const validateCVC = (cvc: string): boolean => {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvc);
};

  

  return (
    <div className="container">      
    <div className="row text-left">
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="cc-number" className="control-label">Credit Card Number <small className="text-muted">[<span data-payment="cc-brand"></span>]</small></label>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>                                    
              <input id="cc-number" type="tel" className="input-lg form-control cc-number" autoComplete="cc-number" placeholder="•••• •••• •••• ••••" data-payment='cc-number' required />
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="form-group">
            <label>Expiration (MM/YYYY)</label>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autoComplete="cc-exp" placeholder="•• / ••••" data-payment='cc-exp' required />
            </div>
          </div>
        </div>        
        <div className="col-sm-4">
          <div className="form-group">
            <label>CVC Code</label>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock"></i></span>
              <input id="cc-cvc" type="tel" className="input-lg form-control cc-cvc" autoComplete="off" placeholder="•••" data-payment='cc-cvc' required />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="button" onClick={handleValidateAndPay}>Pay</button>
      <div id="error-message"></div>
    </div>
  );
};

export default CheckoutButton;
