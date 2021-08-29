var router = require('express').Router();
var trucksController = require('../controllers/trucksController');
router.get('/', trucksController.get_all_trucks)
    .post('/', trucksController.post_truck);
router.put('/:truckId', trucksController.put_truck)["delete"]('/:truckId', trucksController.delete_truck);
module.exports = router;
