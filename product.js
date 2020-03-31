//Function that will display each product
function displayProducts(jsonObj) {

    let product = jsonObj.products;
    let section = document.querySelector('section');
    // Iterate through products array
    for (let i = 0; i < product.length; i++) {
        // Build HTML elements
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
        // Add product data from the array to the html elements
        h2.textContent = product[i].name;
        p1.textContent = '$' + product[i].price;
        p2.textContent = product[i].info;
        img.setAttribute('src', product[i].image);
        img.setAttribute('alt', product[i].name);
        img.setAttribute('width', '200');
        img.setAttribute('height', '300');
        // Attach each element to the article and then the article to the page
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);
    }
}


fetch('https://cpander129.github.io/Lab4/product.json').then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayProducts(data);
    });

/*
 * Tried to do it without the return but it 
 * wasn't working 
 
 fetch('https://cpander129.github.io/Lab4/product.json').then(function (response) {
            response.json().then(displayProducts(data));
        });
*/