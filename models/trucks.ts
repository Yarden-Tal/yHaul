export class Truck {
    type: string
    purpose: string
    price: number
    image: string
    id: string
    constructor(type: string, purpose: string, price: number, image: string, id: string) {
        this.type = type
        this.purpose = purpose
        this.price = price
        this.image = image
        this.id = id
    }
}