import { Controller, Get } from '@nestjs/common';
import Stripe from 'stripe';

@Controller('api')
export class StripeController {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  @Get('payment')
  async processPayment(): Promise<string> {
    // Replace this with your actual payment logic using the Stripe SDK
    return 'Payment processed successfully';
  }
}
