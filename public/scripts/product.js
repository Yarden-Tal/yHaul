// Render
var handleSubmit = function (event) {
    event.preventDefault();
    var truckQuantity = event.target.elements.quantity.value;
    console.log(truckQuantity);
    location.replace('cart.html');
};
