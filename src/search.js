const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 49.99,
    category: "Home Appliances",
  },
  {
    id: 4,
    name: "Headphones",
    price: 199.99,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Blender",
    price: 89.99,
    category: "Home Appliances",
  },
];

const productsListEl = document.querySelector("#js-product-list");
const searchInputEl = document.querySelector("#js-search-input");

makeDefaultProducts();

searchInputEl.addEventListener("input", (event) => {
  console.log(event.target.value);

  const filteredProducts = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
  });

  productsListEl.innerHTML = "";

  filteredProducts.forEach((product) => {
    productsListEl.innerHTML =
      productsListEl.innerHTML + createProductEl(product);
  });

  console.log(filteredProducts);
});

function createProductEl(product) {
  {
    const productEl = `
          <div class="c-product">
            <h3 class="c-product_title">${product.name}</h3>
            <p class="c-product_category">${product.category}</p>
            <p class="c-product_price">Price: <strong>${product.price} Kr</strong></p>
          </div>
          <hr>
  `;

    return productEl;
  }
}

function makeDefaultProducts() {
  products.map((product) => {
    productsListEl.innerHTML =
      productsListEl.innerHTML + createProductEl(product);
  });
}
