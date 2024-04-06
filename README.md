# Appleute Test

This project is a test application for Appleute, featuring a Nest.js backend (StripeApp) and a React frontend (StripeFront).

## Overview

The application allows developers to integrate Stripe with custom methods for ease of use. The module provides basic Stripe functionality and options to save all configurations required for Stripe without hardcoding them in the module.

The backend server runs on `http://localhost:3000`, and the frontend server runs on `http://localhost:3001`.

## Features

- Stripe Payment Integration
- Customer Management Interface
- Credit Card Validation (Change the validators return value to true for testing purposes)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Nest.js installed on your local machine.
- Stripe account for processing payments.

## Backend Setup (StripeApp)

1. Navigate to the `stripeapp` directory:
   cd stripeapp
   
markdown
Copy code
# Appleute Test

This project is a test application for Appleute, featuring a Nest.js backend (StripeApp) and a React frontend (StripeFront).

## Overview

The application allows developers to integrate Stripe with custom methods for ease of use. The module provides basic Stripe functionality and options to save all configurations required for Stripe without hardcoding them in the module.

The backend server runs on `http://localhost:3000`, and the frontend server runs on `http://localhost:3001`.

## Features

- Stripe Payment Integration
- Customer Management Interface
- ## Configuring Stripe

To configure Stripe integration, follow these steps:

1. Open the `stripeapp` backend server code in your preferred text editor.

2. Navigate to the `src/app.module.ts` file.

3. In the `imports` array of the `AppModule`, add the `StripeModule.forRoot` method with your Stripe API key and desired configurations: 
  StripeModule.forRoot(process.env.STRIPE_API_KEY, { apiVersion: '2023-10-16' })

  Replace process.env.STRIPE_API_KEY with your actual Stripe API key.
  
  Save the changes.
  
  Restart the stripeapp server for the changes to take effect.
  
## Dynamic Configuration
The Stripe module allows dynamic configuration by reading environment variables. You can define your Stripe API key and other configurations in a .env file and access them in your code dynamically.

Here's an example of how to define environment variables in a .env file:

    STRIPE_API_KEY=your-stripe-api-key

Then, you can access these variables in your code using process.env.VARIABLE_NAME.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- Stripe account for processing payments.

## Backend Setup (StripeApp)

1. Navigate to the `stripeapp` directory:

   cd stripeapp
   
3. Install dependencies:

    npm install
   
4. Set up environment variables by creating a .env file and adding the following:

    STRIPE_API_KEY=<your-stripe-api-key>

5. Run the backend server:

npm run start:dev


## Frontend Setup (StripeFront):

1. Navigate to the stripefront directory:

cd stripefront

2. Install dependencies:

npm install

4.Set up Stripe API key:

Open PaymentForm.tsx and replace 'pk_test_P3N5vEUYda6Xg4MZM2tWd9PJ00hZgBj5nj' with your Stripe public key. You may use the key provided for testing purposes as it redirects to a dummuy test form.

5.Run the frontend server:

npm start


## Customer Management
The customers' details can be accessed at http://localhost:3000/customers.

## Deployment
To deploy the application, build the frontend production-ready bundle using:


cd stripefront
npm run build


Then, deploy the contents of the build directory to your hosting provider of choice.


## Screenshots

![Customer](https://github.com/parthivvv/appleutetest/blob/main/customerscreenshot.png)
![PaymentLanding](https://github.com/parthivvv/appleutetest/blob/main/mainpage.png)
![StripePayment](https://github.com/parthivvv/appleutetest/blob/main/stripepaymentredirect.png)

