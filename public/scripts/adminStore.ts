confirm('Dear admin, please note that y-Haul must approve of any changes to prices and/or products.')

async function renderTrucksAsAdmin() {
    try {
        const trucksToRender = await axios.get(`/trucks`);
        const root = document.querySelector('.trucks-wrapper');
        let html: string = "";

        const trucks: Array<any> = trucksToRender.data;
        console.log(trucks);
        trucks.forEach(truck => {
            html += `<div class="truck">
            <div class="truck__img">
                <img src="${truck.image}" alt="${truck.type}">
            </div>
            <div class="truck__type">${truck.type}</div>
            <p class="truck__price">${truck.price}$</p>
            <i class="fas fa-edit truck__edit" onclick="handleEdit('${truck.id}')"></i>
            <i class="fas fa-trash truck__delete" onclick="handleDelete('${truck.id}')"></i>
        </div>`
        })
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

renderTrucksAsAdmin()

// Add
const handleAdd = async (ev) => {
    try {
        ev.preventDefault()
        let name = ev.target.elements.name.value
        let price = ev.target.elements.price.value
        let imgUrl = ev.target.elements.img.value
        console.log('form input:', name, price, imgUrl);
        if (!name || !price || !imgUrl) {
            throw new Error("One or more fields are missing");
        }
        ev.target.reset();
        const newTruck = { type: name, price: price, image: imgUrl }
        console.log('newTruck:', newTruck);

        const request = await axios.post('/trucks', { type: name, price: price, image: imgUrl })
        console.log('request var', request);
        await renderTrucksAsAdmin()
    } catch (er) {
        console.error(er)
    }

}

// Delete
const handleDelete = async (id: string) => {
    console.log(id);

    try {
        if (!id) return alert('Id not found!');
        await axios.delete(`/trucks/${id}`);
        await renderTrucksAsAdmin()
    } catch (error) {
        console.error(error)
    }
}

const handleEdit = (id: string) => {
    const editModal = document.querySelector('.edit-modal-wrapper')
    editModal.classList.remove('hide')
    const idToEdit: HTMLInputElement = document.querySelector('#id-edit')
    idToEdit.value = id
}

const handleEditSubmit = async (event) => {
    event.preventDefault()
    const type = event.target.elements['type-edit'].value
    const price = event.target.elements['price-edit'].value
    const image = event.target.elements['image-edit'].value
    const id = event.target.elements['id-edit'].value
    const res = await axios.put(`/trucks/${id}`, { type, price, image })
    console.log(res);
    await renderTrucksAsAdmin()
}