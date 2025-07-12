console.log("first");
let products = [
    {
        "id": 1,
        "name": "Iced Coffee",
        "description": "A refreshing cold beverage made with coffee, milk, and ice.",
        "image_path": "images/iced-coffee-glass.jpg",
        "stock_status": 25,
        "price": 5010.00,
        "date_added": "2025-07-12",
        "date_expired": "2025-07-20",
        "supplier_id": 2
    },
    {
        "id": 2,
        "name": "Iced Tea",
        "description": "Strong black tea made from premium leaves.",
        "image_path": "images/black-tea.jpg",
        "stock_status": 35,
        "price": 275.00,
        "date_added": "2025-07-11",
        "supplier_id": 3
    }
];


document.getElementById("search-box").addEventListener("input", function() {
    console.log(Array.isArray(products));
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
  
});

function displayProducts(filteredProducts){
    
    
    let container = document.querySelector(".search-list-container");
    container.innerHTML = ""; // clear previous results

    for (let product of filteredProducts) {
        const productHtml = `
            <div class="product">
                <div><img src="${product.image_path}" alt=""></div>
                <p class="product-name">${product.name}</p>
                <p class="product-qty">${product.stock_status}</p>
                <p class="product-price">Rs.${product.price}</p>
            </div>
        `;
        container.innerHTML += productHtml;
    }
}