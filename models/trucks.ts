const { v4: uuidv4 } = require("uuid");
const fs = require('fs');
const path = require('path');
const pathToTrucksJson = path.resolve(__dirname, '../db/trucks.json');

export class Truck {
  type: string
  price: number
  image: string
  id: string
  constructor(type: string, price: number, image: string) {
    this.type = type
    this.price = price
    this.image = image
    this.id = uuidv4()
  }
}

export class Trucks {
  trucks: Array<Truck>
  constructor() {
    this.trucks = readAllTrucks()
  }
}

// add uuid!

export const readAllTrucks = () => { //Works on both back & front
  try {
    const allTrucks = fs.readFileSync(pathToTrucksJson)
    const allTrucksParsed = JSON.parse(allTrucks)
    return allTrucksParsed
  } catch (err) {
    return err.message
  }
}

export const addTruck = (truck) => { //Works on back, not on front
  try {
    const allTrucks = readAllTrucks();
    const newTruck = new Truck(truck.type, truck.price, truck.image)
    allTrucks.push(newTruck);
    fs.writeFileSync(pathToTrucksJson, JSON.stringify(allTrucks))
    return allTrucks
  } catch (error) {
    return error.message
  }
}

export const editTruck = (truck): Truck[] => { //Doesn't work yet
  try {
    const allTrucks = readAllTrucks();
    const truckToEditIndex = allTrucks.findIndex((t) => t.id === truck.id);
    console.log(truckToEditIndex)
    allTrucks[truckToEditIndex] = truck
    fs.writeFileSync(pathToTrucksJson, JSON.stringify(allTrucks));
    return allTrucks
  } catch (error) {
    return error.message
  }
}

export const deleteTruck = (id) => { //Works on back, not on front
  try {
    const allTrucks = readAllTrucks();
    const trucksAfterDelete = allTrucks.filter((truck) => truck.id !== id)
    fs.writeFileSync(pathToTrucksJson, JSON.stringify(trucksAfterDelete));
    return allTrucks.length > trucksAfterDelete.length
  } catch (error) {
    return error.message
  }
}