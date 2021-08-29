"use strict";
exports.__esModule = true;
exports.delete_truck = exports.put_truck = exports.post_truck = exports.get_all_trucks = void 0;
var trucks_1 = require("../models/trucks");
exports.get_all_trucks = function (req, res) {
    try {
        var allTrucks = new trucks_1.Trucks();
        res.send(allTrucks.trucks);
        console.log(allTrucks.trucks);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.post_truck = function (req, res) {
    try {
        var data = (req.body);
        var type = data.type, price = data.price, image = data.image;
        if (!type || !price || !image)
            return res.status(400).send('Invalid params');
        var newTruck = new trucks_1.Truck(type, price, image);
        console.log(newTruck);
        res.status(201).send(trucks_1.addTruck(newTruck));
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.put_truck = function (req, res) {
    try {
        var truckId = req.params.truckId;
        if (!truckId)
            return res.status(404).send('Id not found');
        var data = (req.body);
        var type = data.type, price = data.price, image = data.image;
        if (!type || !price || !image)
            return res.status(400).send('Invalid params');
        console.log('Data for PUT:', type, price, image);
        var truck = { type: type, price: price, image: image, id: truckId };
        var trucksAfterEdit = trucks_1.editTruck(truck);
        res.status(200).send(trucksAfterEdit);
        console.log('After edit:', trucksAfterEdit);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.delete_truck = function (req, res) {
    try {
        var truckId = req.params.truckId;
        if (!truckId)
            return res.status(404).send('Id not found');
        var trucksAfterDelete = trucks_1.deleteTruck(truckId);
        if (trucksAfterDelete === false)
            return res.status(404).send('Not deleted!');
        res.status(204).send(trucks_1.readAllTrucks());
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
