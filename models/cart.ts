import { Truck } from './trucks';
 
export class CartItem {
    truck:Truck
    quantity:number
    constructor(truck:Truck, quantity:number) {
        this.truck = truck;
        this.quantity = quantity;
    }
}