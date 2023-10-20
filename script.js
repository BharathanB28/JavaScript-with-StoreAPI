// this is an arrow function
const loadStoreAPI = () =>{
    // fetch url of rest country from website
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => displayProducts(data))
}

// displaying all countries
const displayProducts = products =>{
    // console.log(countries);
    const productsHTML = products.map(product => getProduct(product));
    // displaying div to html
    const container = document.getElementById('container');
    container.innerHTML = productsHTML.join(' ');
}

// get data and set it to html
const getProduct = (product) =>{
    console.log(product)
    const description = product.description;
    const title = product.title;

    return `
        <div class="product">
        <img class="product-img" src="${product.image}">
        <h2 class="product-title">${title}</h2>
        <h4 class="product-category">${product.category}</h4>
       
        <h3 class="product-price">$${product.price}</h3>
        </div>
    `
}

// call the funtion to get output in console
loadStoreAPI()

