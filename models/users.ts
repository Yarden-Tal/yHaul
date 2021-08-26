import { CartItem } from './cart';
import { Truck } from './trucks';

export class User {
    email: string
    password: string
    cart: Array<CartItem>
    id: string
    constructor(email: string, password: string, cart:Array<CartItem>) {
        this.email = email
        this.password = password
        this.cart = cart
    }
}