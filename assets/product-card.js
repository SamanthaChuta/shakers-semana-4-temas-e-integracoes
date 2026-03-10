const img = document.querySelector('#img')
const optionSelects = document.querySelectorAll('select')
const variants = document.querySelector("#camisas").textContent
const v = JSON.parse(variants)
const precoP = document.querySelector('#preco')
const produtoP = document.querySelector('#produto')
let variant_id
const addToCartButton = document.querySelector('#add-to-cart')

let sizeSelected, colorSelected;
optionSelects.forEach((optionSelect) => {
    console.log(optionSelect)
    optionSelect.addEventListener('change', (e) => {
        console.log(optionSelect.id)
        if (optionSelect.id == "tamanho") {
            sizeSelected = e.target.value;
        }
        if (optionSelect.id == "cor") {
            colorSelected = e.target.value
        }
        console.log(sizeSelected, colorSelected);
        v.variants.forEach(variant => {
            if (variant.option1 == colorSelected && variant.option2 == sizeSelected) {
                console.log((variant.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
                img.src = variant.featured_image.src
                precoP.textContent = (variant.price / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });
                produtoP.textContent = variant.name
                variant_id = variant.id
            }
        })
    })
}
)
addToCartButton.addEventListener('click', () => {
    addToCart(variant_id)
    alert(variant_id)
})

async function addToCart(id) {

    let formData = {
        'items': [{
            'id': id,
            'quantity': 1
        }]
    };
    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    ).then(response => {
        console.log(response);
    }).catch((error) => {
        console.error('Error:', error);
    });
}

function mostrarCarrinho() {
    fetch(window.Shopify.routes.root + 'cart.json')
        .then(response => response.json())
        .then(cart => console.log(cart))
        .catch(error => console.error(error))
}