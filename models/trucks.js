"use strict";
exports.__esModule = true;
exports.deleteTruck = exports.editTruck = exports.addTruck = exports.readAllTrucks = exports.Trucks = exports.Truck = void 0;
var uuidv4 = require("uuid").v4;
var fs = require('fs');
var path = require('path');
var pathToTrucksJson = path.resolve(__dirname, '../db/trucks.json');
var Truck = /** @class */ (function () {
    function Truck(type, price, image) {
        this.type = type;
        this.price = price;
        this.image = image;
        this.id = uuidv4();
    }
    return Truck;
}());
exports.Truck = Truck;
var Trucks = /** @class */ (function () {
    function Trucks() {
        this.trucks = exports.readAllTrucks();
    }
    return Trucks;
}());
exports.Trucks = Trucks;
// add uuid!
exports.readAllTrucks = function () {
    try {
        var allTrucks = fs.readFileSync(pathToTrucksJson);
        var allTrucksParsed = JSON.parse(allTrucks);
        return allTrucksParsed;
    }
    catch (err) {
        return err.message;
    }
};
exports.addTruck = function (truck) {
    try {
        var allTrucks = exports.readAllTrucks();
        var newTruck = new Truck(truck.type, truck.price, truck.image);
        allTrucks.push(newTruck);
        fs.writeFileSync(pathToTrucksJson, JSON.stringify(allTrucks));
        return allTrucks;
    }
    catch (error) {
        return error.message;
    }
};
exports.editTruck = function (truck) {
    try {
        var allTrucks = exports.readAllTrucks();
        var truckToEditIndex = allTrucks.findIndex(function (t) { return t.id === truck.id; });
        console.log(truckToEditIndex);
        allTrucks[truckToEditIndex] = truck;
        fs.writeFileSync(pathToTrucksJson, JSON.stringify(allTrucks));
        return allTrucks;
    }
    catch (error) {
        return error.message;
    }
};
exports.deleteTruck = function (id) {
    try {
        var allTrucks = exports.readAllTrucks();
        var trucksAfterDelete = allTrucks.filter(function (truck) { return truck.id !== id; });
        fs.writeFileSync(pathToTrucksJson, JSON.stringify(trucksAfterDelete));
        return allTrucks.length > trucksAfterDelete.length;
    }
    catch (error) {
        return error.message;
    }
};
