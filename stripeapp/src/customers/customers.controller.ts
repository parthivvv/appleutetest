import { Controller, Get, Inject } from '@nestjs/common';
import { STRIPE_CLIENT } from '../stripe/constants';
import Stripe from 'stripe';

@Controller('customers')
export class CustomersController { 
    constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) {}

    @Get('/')
    async listCustomers() {
        try {
            const customers = await this.stripe.customers.list();
            return customers;
        } catch (error) {
            // Handle error
            console.error(error);
            throw error;
        }
    }
}
