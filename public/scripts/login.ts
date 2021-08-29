function login(email: string, password: string) {
    fetch('http://localhost:3000/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.token))
            alert('Login successful')
            location.replace("store.html")
        }).catch(error => console.log(error))
}

function handleSubmit(event) {
    event.preventDefault()
    const email = event.target.elements['email'].value
    const password = event.target.elements['password'].value
    login(email, password)
}