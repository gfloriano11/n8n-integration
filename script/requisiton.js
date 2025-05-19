const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const response = await fetch(`http://localhost:8000/webhook-test`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    if(!response.ok){
        throw new Error('cannot get info');
    }

    let data = await response.json();

    console.log(data);

    data.forEach((item) => {
        const div = document.createElement('div');

        div.innerHTML = `<p>Olá, ${item.nome}!</p>`
        document.body.appendChild(div);
    })
})