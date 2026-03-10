# Desafio Semana 4 - Product Card Customizado

Este projeto foi desenvolvido como parte do **Desafio da Semana 4 da Shakers**, com o objetivo de criar um Product Card customizado na Shopify.

Durante o desenvolvimento, foi necessário trabalhar com produtos que possuem variantes, como cor e tamanho, implementando a lógica para que essas opções fossem selecionadas dinamicamente pelo usuário.

O card do produto foi construído utilizando Liquid, HTML, CSS e JavaScript, permitindo a exibição correta das informações do produto e a interação com as variantes. Além disso, o botão Add to Cart foi implementado utilizando JavaScript e a Cart API da Shopify.

A lógica das variantes funciona a partir das combinações possíveis de opções do produto; cada combinação representa uma variante única dentro da Shopify. Essas variantes são disponibilizadas no template através do Liquid, utilizando `product.variants`, e essas informações são utilizadas pelo JavaScript para identificar qual variante corresponde às escolhas feitas pelo usuário. Quando o usuário seleciona as opções, o JavaScript percorre a lista de variantes e encontra aquela que possui exatamente os mesmos valores selecionados, capturando então o ID da variante correspondente. Após identificar esse ID, ocorre a integração da Shopify /cart/add.js, que é responsável por adicionar itens ao carrinho. Essa integração é feita por meio de uma requisição POST utilizando fetch, onde são enviados o ID da variante e a quantidade do produto, permitindo que o item seja adicionado ao carrinho de forma dinâmica diretamente pelo JavaScript.

---
- [Ver Pull Request](https://github.com/SamanthaChuta/shakers-semana-4-temas-e-integracoes/pull/1)

- [Vídeo](https://drive.google.com/drive/folders/1A8_ntRlIzkR018XyDTCP13gUZcpzxY7m?usp=drive_link)

---
## Estrutura do Projeto

````bash
shakers-semana-4-temas-e-integracoes/
-section/product-grid.liquid
-snippets/product-card-custom.liquid
-assets/product-card.js
