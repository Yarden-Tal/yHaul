const handleGoToProduct = ():void => {
    location.replace("product.html")
}

const handleGoToCart = ():void => {
    location.replace("cart.html")
}

async function renderTrucks():Promise<any> {
    try {
        const trucksToRender = await axios.get(`/trucks`);
        const root:HTMLDivElement = document.querySelector('.trucks-wrapper');
        let html:string = "";
        console.log(trucksToRender.data);
        
        const trucks:Array<any> = trucksToRender.data;
        trucks.forEach(truck => {
            html += `<div class="truck" id="${truck.id}">
            <div class="truck__img">
                <img src="${truck.image}" alt="${truck.type}">
            </div>
            <div class="truck__type">${truck.type}</div>
            <p class="truck__price">${truck.price}$</p>
            <button id="rent-pickup-btn" class="truck__choose-btn" onclick="handleGoToProduct()">Rent</button>
            </div>`
        })
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

renderTrucks()