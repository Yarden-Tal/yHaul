import { CartItem } from './cart';
import { Truck } from './trucks';
const { v4: uuidv4 } = require('uuid');

export class User {
    email: string
    password: string
    cart: Array<CartItem>
    id: string
    constructor(email: string, password: string, cart:Array<CartItem>) {
        this.email = email
        this.password = password
        this.cart = cart
        this.id = uuidv4()
    }
}