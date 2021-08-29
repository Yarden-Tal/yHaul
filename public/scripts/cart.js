var handleGoToCart = function () {
    location.replace("cart.html");
};
var purchase = function (event) {
    confirm('Are you sure you want to finalize your purchase?');
    if (confirm)
        alert('Thank you for your purchase at y-Haul!');
    confirm('Would you like to print your order summary?');
    window.print();
};
