import { readAllTrucks, Truck, Trucks, addTruck, editTruck, deleteTruck } from '../models/trucks'

export const get_all_trucks = (req, res) => {
    try {
        const allTrucks = new Trucks()
        res.send(allTrucks.trucks)
        console.log(allTrucks.trucks)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const post_truck = (req, res) => {
    try {
        const data = (req.body)
        const { type, price, image } = data
        if (!type || !price || !image) return res.status(400).send('Invalid params')
        const newTruck = new Truck(type, price, image)
        console.log(newTruck)
        res.status(201).send(addTruck(newTruck))
    } catch (error) {
        res.status(500).send(error.message)
    }
}


export const put_truck = (req, res) => {
    try {
        const { truckId } = req.params
        if (!truckId) return res.status(404).send('Id not found')
        const data = (req.body)
        const { type, price, image } = data

        if (!type || !price || !image) return res.status(400).send('Invalid params')
        console.log('Data for PUT:', type, price, image);
        const truck: Truck = { type, price, image, id: truckId }
        const trucksAfterEdit = editTruck(truck)
        res.status(200).send(trucksAfterEdit)
        console.log('After edit:', trucksAfterEdit);
    } catch (error) {
        res.status(500).send(error.message)
    }

}


export const delete_truck = (req, res) => {
    try {
        const { truckId } = req.params
        if (!truckId) return res.status(404).send('Id not found')
        const trucksAfterDelete = deleteTruck(truckId)
        if (trucksAfterDelete === false) return res.status(404).send('Not deleted!')
        res.status(204).send(readAllTrucks())

    } catch (error) {
        res.status(500).send(error.message)
    }
}