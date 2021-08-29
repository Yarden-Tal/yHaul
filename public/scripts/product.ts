// Render

const handleSubmit = (event) => {
    event.preventDefault()
    const truckQuantity = event.target.elements.quantity.value
    console.log(truckQuantity)
    location.replace('cart.html')
}