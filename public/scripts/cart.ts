const handleGoToCart = (): void => {
    location.replace("cart.html")
}

const purchase = (event): void => {
    confirm('Are you sure you want to finalize your purchase?')
    if (confirm) alert('Thank you for your purchase at y-Haul!')
    confirm('Would you like to print your order summary?')
    if (confirm) window.print()
}