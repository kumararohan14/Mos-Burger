console.log("first");
let products = [
    {
        id: 1,
        name: "Classic Burger (Large)",
        description: "A large, traditional-style burger perfect for any appetite.",
        image_path: "images/classic-burger-large.jpg",
        stock_status: 50,
        price: 750.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-19",
        supplier_id: 1,
        item_code: "B1001"
    },
    {
        id: 2,
        name: "Classic Burger (Regular)",
        description: "A classic burger in a regular portion, great for a quick bite.",
        image_path: "images/classic-burger-regular.jpg",
        stock_status: 35,
        price: 1500.00,
        discount: "15%",
        date_added: "2025-07-12",
        date_expired: "2025-07-19",
        supplier_id: 1,
        item_code: "B1002"
    },
    {
        id: 3,
        name: "Turkey Burger",
        description: "Juicy turkey patty grilled to perfection with fresh toppings.",
        image_path: "images/turkey-burger.jpg",
        stock_status: 20,
        price: 1600.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-20",
        supplier_id: 2,
        item_code: "B1003"
    },
    {
        id: 4,
        name: "Chicken Burger (Large)",
        description: "A hearty chicken burger served in a large size.",
        image_path: "images/chicken-burger-large.jpg",
        stock_status: 40,
        price: 1400.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-20",
        supplier_id: 2,
        item_code: "B1004"
    },
    {
        id: 5,
        name: "Chicken Burger (Regular)",
        description: "Regular-sized chicken burger, lightly seasoned and delicious.",
        image_path: "images/chicken-burger-regular.jpg",
        stock_status: 30,
        price: 800.00,
        discount: "20%",
        date_added: "2025-07-12",
        date_expired: "2025-07-19",
        supplier_id: 2,
        item_code: "B1005"
    },
    {
        id: 6,
        name: "Cheese Burger (Large)",
        description: "Large burger topped with rich, melted cheese.",
        image_path: "images/cheese-burger-large.jpg",
        stock_status: 25,
        price: 1000.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-18",
        supplier_id: 3,
        item_code: "B1006"
    },
    {
        id: 7,
        name: "Cheese Burger (Regular)",
        description: "Classic cheese burger in a regular serving.",
        image_path: "images/cheese-burger-regular.jpg",
        stock_status: 40,
        price: 600.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-18",
        supplier_id: 3,
        item_code: "B1007"
    },
    {
        id: 8,
        name: "Bacon Burger",
        description: "Savory bacon layered over a juicy patty for bold flavor.",
        image_path: "images/bacon-burger.jpg",
        stock_status: 35,
        price: 650.00,
        discount: "15%",
        date_added: "2025-07-12",
        date_expired: "2025-07-20",
        supplier_id: 4,
        item_code: "B1008"
    },
    {
        id: 9,
        name: "Shawarma Burger",
        description: "Fusion of shawarma spices with classic burger elements.",
        image_path: "images/shawarma-burger.jpg",
        stock_status: 30,
        price: 800.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-19",
        supplier_id: 4,
        item_code: "B1009"
    },
    {
        id: 10,
        name: "Olive Burger",
        description: "Gourmet burger featuring tangy olives and fresh greens.",
        image_path: "images/olive-burger.jpg",
        stock_status: 20,
        price: 1800.00,
        date_added: "2025-07-12",
        date_expired: "2025-07-20",
        supplier_id: 4,
        item_code: "B1010"
    },
    {
        id: 11,
        name: "Crispy Chicken Burger (Regular)",
        description: "A regular-sized crispy chicken burger, perfectly fried and seasoned.",
        image_path: "images/crispy-chicken-burger-regular.jpg",
        stock_status: 30,
        price: 1200.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 1,
        item_code: "B1013"
    },
    {
        id: 12,
        name: "Crispy Chicken Burger (Large)",
        description: "Generous crispy chicken burger with a 10% discount for big appetites.",
        image_path: "images/crispy-chicken-burger-large.jpg",
        stock_status: 25,
        price: 1600.00,
        discount: "10%",
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 1,
        item_code: "B1014"
    },
    {
        id: 13,
        name: "Paneer Burger",
        description: "Delicious Indian-style burger with a savory paneer patty and fresh fixings.",
        image_path: "images/paneer-burger.jpg",
        stock_status: 20,
        price: 900.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 2,
        item_code: "B1015"
    },
    {
        id: 14,
        name: "Spicy Chicken Burger",
        description: "Spice-laced crispy chicken burger that packs a punch.",
        image_path: "images/spicy-chicken-burger.jpg",
        stock_status: 28,
        price: 1350.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 1,
        item_code: "B1016"
    },
    {
        id: 15,
        name: "Veggie Burger",
        description: "A satisfying vegetarian burger filled with garden-fresh ingredients.",
        image_path: "images/veggie-burger.jpg",
        stock_status: 22,
        price: 950.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 2,
        item_code: "B1017"
    },
    {
        id: 16,
        name: "Grilled Beef Burger",
        description: "Juicy grilled beef patty with classic toppings.",
        image_path: "images/grilled-beef-burger.jpg",
        stock_status: 30,
        price: 1700.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 3,
        item_code: "B1018"
    },
    {
        id: 17,
        name: "Crispy Chicken Submarine (Large)",
        description: "A large submarine packed with crispy chicken goodness.",
        image_path: "images/crispy-chicken-sub-large.jpg",
        stock_status: 30,
        price: 2000.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 1,
        item_code: "B1016"
    },
    {
        id: 18,
        name: "Crispy Chicken Submarine (Regular)",
        description: "Regular submarine with golden crispy chicken filling.",
        image_path: "images/crispy-chicken-sub-regular.jpg",
        stock_status: 28,
        price: 1500.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 1,
        item_code: "B1017"
    },
    {
        id: 19,
        name: "Chicken Submarine (Large)",
        description: "Large chicken sub with savory grilled flavor and 3% discount.",
        image_path: "images/chicken-sub-large.jpg",
        stock_status: 25,
        price: 1800.00,
        discount: "3%",
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 2,
        item_code: "B1018"
    },
    {
        id: 20,
        name: "Chicken Submarine (Regular)",
        description: "Regular-size chicken sub, perfectly seasoned and grilled.",
        image_path: "images/chicken-sub-regular.jpg",
        stock_status: 30,
        price: 1400.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 2,
        item_code: "B1019"
    },
    {
        id: 21,
        name: "Grinder Submarine",
        description: "Hearty submarine layered with meats and cheeses.",
        image_path: "images/grinder-sub.jpg",
        stock_status: 20,
        price: 2300.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 3,
        item_code: "B1020"
    },
    {
        id: 22,
        name: "Cheese Submarine",
        description: "Classic cheese-packed submarine sandwich.",
        image_path: "images/cheese-sub.jpg",
        stock_status: 35,
        price: 2200.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 3,
        item_code: "B1021"
    },
    {
        id: 23,
        name: "Double Cheese n Chicken Submarine",
        description: "A decadent blend of double cheese and tender chicken with 16% discount.",
        image_path: "images/double-cheese-chicken-sub.jpg",
        stock_status: 25,
        price: 1900.00,
        discount: "16%",
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 4,
        item_code: "B1022"
    },
    {
        id: 24,
        name: "Special Horgie Submarine",
        description: "Packed and stacked specialty hoagie with bold flavors.",
        image_path: "images/special-horgie-sub.jpg",
        stock_status: 18,
        price: 2800.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 4,
        item_code: "B1023"
    },
    {
        id: 25,
        name: "MOS Special Submarine",
        description: "Exclusive MOS recipe submarine sandwich with gourmet taste.",
        image_path: "images/mos-special-sub.jpg",
        stock_status: 20,
        price: 3000.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 4,
        item_code: "B1024"
    },
    {
        id: 26,
        name: "Steak Fries (Large)",
        description: "Thick-cut steak fries, crispy on the outside and fluffy inside.",
        image_path: "images/steak-fries-large.jpg",
        stock_status: 30,
        price: 1200.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 1,
        item_code: "B1025"
    },
    {
        id: 27,
        name: "Steak Fries (Medium)",
        description: "Medium portion of steak-style fries, golden and flavorful.",
        image_path: "images/steak-fries-medium.jpg",
        stock_status: 35,
        price: 600.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 1,
        item_code: "B1026"
    },
    {
        id: 28,
        name: "French Fries (Large)",
        description: "Classic large French fries, golden and crispy.",
        image_path: "images/french-fries-large.jpg",
        stock_status: 40,
        price: 800.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 2,
        item_code: "B1027"
    },
    {
        id: 29,
        name: "French Fries (Medium)",
        description: "Medium-sized classic French fries, ideal for snacking.",
        image_path: "images/french-fries-medium.jpg",
        stock_status: 45,
        price: 650.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 2,
        item_code: "B1028"
    },
    {
        id: 30,
        name: "French Fries (Small)",
        description: "Small portion of golden French fries — quick, crunchy, and tasty.",
        image_path: "images/french-fries-small.jpg",
        stock_status: 50,
        price: 450.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-18",
        supplier_id: 2,
        item_code: "B1029"
    },
    {
        id: 31,
        name: "Sweet Potato Fries (Large)",
        description: "Sweet potato fries with a caramelized crisp — healthy and delicious.",
        image_path: "images/sweet-potato-fries-large.jpg",
        stock_status: 25,
        price: 600.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-18",
        supplier_id: 3,
        item_code: "B1030"
    },
    {
        id: 32,
        name: "Chicken n Cheese Pasta",
        description: "Creamy pasta loaded with tender chicken and melted cheese.",
        image_path: "images/chicken-cheese-pasta.jpg",
        stock_status: 30,
        price: 1600.00,
        discount: "15%",
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 1,
        item_code: "B1031"
    },
    {
        id: 33,
        name: "Chicken Penne Pasta",
        description: "Classic penne pasta tossed with grilled chicken in savory sauce.",
        image_path: "images/chicken-penne-pasta.jpg",
        stock_status: 35,
        price: 1700.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 1,
        item_code: "B1032"
    },
    {
        id: 34,
        name: "Ground Turkey Pasta Bake",
        description: "Baked pasta dish with seasoned turkey and melted cheese.",
        image_path: "images/turkey-pasta-bake.jpg",
        stock_status: 28,
        price: 2900.00,
        discount: "10%",
        date_added: "2025-07-13",
        date_expired: "2025-07-21",
        supplier_id: 2,
        item_code: "B1033"
    },
    {
        id: 35,
        name: "Creamy Shrimp Pasta",
        description: "Savory shrimp in a velvety cream sauce over al dente pasta.",
        image_path: "images/creamy-shrimp-pasta.jpg",
        stock_status: 26,
        price: 2000.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 2,
        item_code: "B1034"
    },
    {
        id: 36,
        name: "Lemon Butter Pasta",
        description: "Fresh pasta tossed in zesty lemon butter sauce.",
        image_path: "images/lemon-butter-pasta.jpg",
        stock_status: 24,
        price: 1950.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 3,
        item_code: "B1035"
    },
    {
        id: 37,
        name: "Tagliatelle Pasta",
        description: "Traditional ribbon-style pasta served with light herbs and sauce.",
        image_path: "images/tagliatelle-pasta.jpg",
        stock_status: 20,
        price: 2400.00,
        discount: "1%",
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 3,
        item_code: "B1036"
    },
    {
        id: 38,
        name: "Fried Chicken (Small)",
        description: "Crispy fried chicken served in a small portion.",
        image_path: "images/fried-chicken-small.jpg",
        stock_status: 30,
        price: 1200.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 1,
        item_code: "B1038"
    },
    {
        id: 39,
        name: "Fried Chicken (Regular)",
        description: "A regular-sized portion of golden, crunchy fried chicken.",
        image_path: "images/fried-chicken-regular.jpg",
        stock_status: 35,
        price: 2300.00,
        discount: "10%",
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 1,
        item_code: "B1039"
    },
    {
        id: 40,
        name: "Fried Chicken (Large)",
        description: "Generous serving of crispy fried chicken perfect for sharing.",
        image_path: "images/fried-chicken-large.jpg",
        stock_status: 28,
        price: 3100.00,
        discount: "5%",
        date_added: "2025-07-13",
        date_expired: "2025-07-19",
        supplier_id: 1,
        item_code: "B1040"
    },
    {
        id: 41,
        name: "Hot Wings (Large)",
        description: "Spicy chicken wings packed with heat and flavor.",
        image_path: "images/hot-wings-large.jpg",
        stock_status: 32,
        price: 2400.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 2,
        item_code: "B1041"
    },
    {
        id: 42,
        name: "Devilled Chicken (Large)",
        description: "Bold devilled chicken with Sri Lankan spices — large portion.",
        image_path: "images/devilled-chicken-large.jpg",
        stock_status: 26,
        price: 900.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 2,
        item_code: "B1042"
    },
    {
        id: 43,
        name: "BBQ Chicken (Regular)",
        description: "Smoky barbecue chicken in a regular portion.",
        image_path: "images/bbq-chicken-regular.jpg",
        stock_status: 30,
        price: 2100.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-20",
        supplier_id: 3,
        item_code: "B1043"
    },
     {
        id: 44,
        name: "Pepsi (330ml)",
        description: "Chilled Pepsi in a 330ml bottle — fizzy, refreshing, and flavorful.",
        image_path: "images/pepsi-330ml.jpg",
        stock_status: 30,
        price: 990.00,
        discount: "5%",
        date_added: "2025-07-13",
        date_expired: "2025-07-18",
        supplier_id: 1,
        item_code: "B1044"
    },
    {
        id: 45,
        name: "Coca-Cola (330ml)",
        description: "Classic Coca-Cola in a 330ml bottle — timeless and crisp.",
        image_path: "images/coca-cola-330ml.jpg",
        stock_status: 35,
        price: 1230.00,
        date_added: "2025-07-13",
        date_expired: "2025-07-18",
        supplier_id: 1,
        item_code: "B1045"
    },
    {
        id: 46,
        name: "Sprite (330ml)",
        description: "Lemon-lime Sprite in a 330ml bottle — light and bubbly.",
        image_path: "images/sprite-330ml.jpg",
        stock_status: 32,
        price: 1500.00,
        discount: "3%",
        date_added: "2025-07-13",
        date_expired: "2025-07-18",
        supplier_id: 2,
        item_code: "B1046"
    }
    // {
    //     id: 47,
    //     name: "Mirinda (330ml)",
    //     description: "Fruity Mirinda in a 330ml bottle — vibrant and sweet with a 7% discount.",
    //     image_path: "images/mirinda-330ml.jpg",
    //     stock_status: 28,
    //     price: 850.00,
    //     discount: "7%",
    //     date_added: "2025-07-13",
    //     date_expired: "2025-07-18",
    //     supplier_id: 2,
    //     item_code: "B1047"
    // }
];


document.getElementById("search-box").addEventListener("input", function() {
    
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)  
  );
  console.log(filteredProducts);

  displayProducts(filteredProducts);
  
});

function displayProducts(filteredProducts){
    let container1 = document.getElementById("search-list-container");
    
    let container = document.querySelector(".search-list-container");
    container.innerHTML = ""; // clear previous results

    for (let product of filteredProducts) {
        const productHtml = `
        <div class="product" onclick="addToCart(${product.id})">
            <div class="product">
                <div><img src="${product.image_path}" alt=""></div>
                <p class="product-name">${product.name}</p>
                <p class="product-qty">${product.stock_status}</p>
                <p class="product-price">Rs.${product.price}</p>
            </div>
        </div>
        `;
        container.innerHTML += productHtml;
    }
}

const openBtn = document.querySelector('.product-btn');
  const popup = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('closePopup');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Optional: Close when clicking outside the popup
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  const saveBtn = document.getElementById('saveBtn');

  saveBtn.addEventListener('click', () => {
  const product = {
    name: document.getElementById('productName').value,
    description: document.getElementById('description').value,
    image_path: document.getElementById('imagePath').value,
    stock_status: parseInt(document.getElementById('stockStatus').value),
    price: parseFloat(document.getElementById('price').value),
    date_added: document.getElementById('dateAdded').value,
    date_expired: document.getElementById('dateExpired').value,
    supplier_id: parseInt(document.getElementById('supplierId').value),
    item_code: document.getElementById('itemCode').value
  };
  products.push(product);

  console.log(product); // or save to array, send to server, etc.
  alert("Product saved: " + product.name);
});

function increaseQty(btn) {
  let input = btn.previousElementSibling;
  let row = btn.closest('tr');
  let priceObj= row.querySelector(".price-qty")
  let unitPrice = parseFloat(row.querySelector(".unit-price").value);

  input.value = parseInt(input.value) + 1;
  let totalPrice= unitPrice*input.value;
  priceObj.textContent=totalPrice;
  calculateTotal();
  
}

function decreaseQty(btn) {
  let input = btn.nextElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function removeItem(btn) {
  let row = btn.closest('tr');
    console.log(row);
  row.remove();
 
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cartBody = document.getElementById("cart-body");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${product.item_code}</td>
    <td>${product.name}</td>
    <td>
        <div class="qty-control">
        <button onclick="decreaseQty(this)">-</button>
        <input type="text" value="1"/>
        <button onclick="increaseQty(this)">+</button>
        </div>
    </td>
    <input type="hidden" class="unit-price" value=${product.price} />
    <td>RS<span class="price-qty">${product.price}</span></td>
    <td><button onclick="removeItem(this)" class="remove-btn">×</button></td>
  `;
    
    console.log(document.getElementById("cart-body").children);
    
  cartBody.appendChild(row);
    calculateTotal();

}

function calculateTotal(){
    let total = 0;
    const priceSpan = document.querySelectorAll('.price-qty');
    priceSpan.forEach(element => {
      total += parseFloat(element.textContent);   
    });
    document.getElementById("grossTotal").innerText=total;
}

document.getElementById("discountInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let discountValue = parseFloat(this.value);
    
    
    console.log("Entered discount:", discountValue);
    // You can now use discountValue as needed
    
    document.getElementById("grossTotal").innerText = parseFloat(document.getElementById("grossTotal").innerText)-discountValue;
    console.log(document.getElementById("grossTotal").innerText);
    //document.getElementById("grossTotal").value-discountValue;
  }

});