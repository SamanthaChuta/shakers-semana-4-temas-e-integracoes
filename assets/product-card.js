const img = document.querySelector('#img')
const optionSelects = document.querySelectorAll('select')
const variants = document.querySelector("#camisas").textContent
const v = JSON.parse(variants)
console.log(v)
const precoP = document.querySelector('#preco')
const produtoP = document.querySelector('#produto')
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
            }
        })
    })
}
)