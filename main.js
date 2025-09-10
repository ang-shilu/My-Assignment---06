document.addEventListener('DOMContentLoaded', () => {
  const currency = "৳";

const plants = [ { "id": 1, "image": "https://i.ibb.co/cSQdg7tf/mango-min.jpg", "name": "Mango Tree", "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.", "category": "Fruit Tree", "price": 500 }, { "id": 2, "image": "https://i.ibb.co/WNbbx3rn/guava-min.jpg", "name": "Guava Tree", "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.", "category": "Fruit Tree", "price": 350 }, { "id": 3, "image": "https://i.ibb.co/xt98PwZq/jackfruit-min.jpg", "name": "Jackfruit Tree", "description": "A large tropical tree that bears the world’s biggest fruit, the jackfruit. Its sweet and aromatic flesh is both nutritious and filling, and the tree itself provides generous shade.", "category": "Fruit Tree", "price": 800 }, { "id": 4, "image": "https://i.ibb.co/1YzsVWjm/Gulmohar-min.jpg", "name": "Gulmohar", "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.", "category": "Flowering Tree", "price": 400 }, { "id": 5, "image": "https://i.ibb.co/qY8qS7YN/champa-min.jpg", "name": "Champa", "description": "A fragrant flowering tree that adorns gardens with its delicate white blossoms. Widely cherished in traditional rituals and perfumery.", "category": "Flowering Tree", "price": 300 }, { "id": 6, "image": "https://i.ibb.co/MxPrt83c/Krishnachura-min.jpg", "name": "Krishnachura", "description": "A striking ornamental tree famous for its brilliant orange-red blossoms. Its wide canopy adds a festive charm to parks and roadsides.", "category": "Flowering Tree", "price": 450 }, { "id": 7, "image": "https://i.ibb.co/FkH6MRhR/banyan-min.jpg", "name": "Banyan Tree", "description": "A majestic shade tree with a vast canopy and iconic aerial roots. Revered in many cultures, it offers shelter to countless birds and animals.", "category": "Shade Tree", "price": 1200 }, { "id": 8, "image": "https://i.ibb.co/CKXhH7nP/neem-min.jpg", "name": "Neem Tree", "description": "A medicinal shade tree with powerful insect-repelling properties. Its leaves, bark, and seeds are widely used in traditional remedies.", "category": "Shade Tree", "price": 600 }, { "id": 9, "image": "https://i.ibb.co/svQdDjS8/rain-min.jpg", "name": "Rain Tree", "description": "A fast-growing tree with umbrella-like canopy and soft pink flowers. Perfect for roadside planting to provide cool shade.", "category": "Shade Tree", "price": 900 }, { "id": 10, "image": "https://i.ibb.co/50K7Cgv/amla-min.jpg", "name": "Amla Tree", "description": "A small to medium tree producing fruits rich in Vitamin C and antioxidants. Its fruits are used in Ayurvedic tonics for boosting immunity.", "category": "Medicinal Tree", "price": 550 }, { "id": 11, "image": "https://i.ibb.co/MxSDCxV4/arjun-min.jpg", "name": "Arjun Tree", "description": "A sturdy tree with bark known for its heart-strengthening properties. Valued in herbal medicine for cardiovascular health.", "category": "Medicinal Tree", "price": 700 }, { "id": 12, "image": "https://i.ibb.co/pB68Sz1g/bael-min.jpg", "name": "Bael Tree", "description": "A fruit tree whose pulp is used as a natural coolant and digestive aid. The fragrant flowers also attract bees and butterflies.", "category": "Medicinal Tree", "price": 500 }, { "id": 13, "image": "https://i.ibb.co/391CtLWD/teak-min.jpg", "name": "Teak", "description": "A high-value hardwood tree known for its durability and resistance to termites. Widely used in luxury furniture and shipbuilding.", "category": "Timber Tree", "price": 2000 }, { "id": 14, "image": "https://i.ibb.co/QvGgW8Fb/mahogony-min.jpg", "name": "Mahogany", "description": "A premium timber tree producing richly colored, strong wood. Favored for fine furniture and interior paneling.", "category": "Timber Tree", "price": 2500 }, { "id": 15, "image": "https://i.ibb.co/Lz6BSq4Z/sal-min.jpg", "name": "Sal Tree", "description": "A tall hardwood tree producing extremely strong timber. Used extensively in heavy construction and railway sleepers.", "category": "Timber Tree", "price": 1800 }, { "id": 16, "image": "https://i.ibb.co/fdYphDNS/pine-min.jpg", "name": "Pine", "description": "An evergreen tree with needle-like leaves and fragrant resin. Commonly used for timber, paper production, and landscaping.", "category": "Evergreen Tree", "price": 1500 }, { "id": 17, "image": "https://i.ibb.co/YTJjYcGX/cypress-min.jpg", "name": "Cypress", "description": "A tall, dense evergreen tree often planted for privacy screens. Its wood is resistant to decay and pests.", "category": "Evergreen Tree", "price": 1300 }, { "id": 18, "image": "https://i.ibb.co/xSL9M8tg/fir-min.jpg", "name": "Fir", "description": "A conical evergreen tree ideal for ornamental gardens. Its wood is also used in light construction and paper making.", "category": "Evergreen Tree", "price": 1400 }, { "id": 19, "image": "https://i.ibb.co/x8gt87ks/bonsai-min.jpg", "name": "Bonsai", "description": "An artfully grown miniature tree cultivated in pots. Represents patience, harmony, and a connection to nature.", "category": "Ornamental Plant", "price": 800 }, { "id": 20, "image": "https://i.ibb.co/Y79mHSng/areca-palm-min.jpg", "name": "Areca Palm", "description": "An elegant indoor palm that purifies air and adds tropical charm. Low maintenance and perfect for home interiors.", "category": "Ornamental Plant", "price": 600 }, { "id": 21, "image": "https://i.ibb.co/8gqbH5LC/fan-palm-min.jpg", "name": "Fan Palm", "description": "A decorative palm with large, fan-shaped leaves. Suitable for both indoor decoration and garden landscapes.", "category": "Ornamental Plant", "price": 900 }, { "id": 22, "image": "https://i.ibb.co/xqFD0WyS/golden-bamboo-min.jpg", "name": "Golden Bamboo", "description": "A fast-growing bamboo variety with golden-yellow stems. Perfect for privacy hedges and eco-friendly construction.", "category": "Bamboo", "price": 700 }, { "id": 23, "image": "https://i.ibb.co/BKZ52h3q/black-bamboo-min.jpg", "name": "Black Bamboo", "description": "An exotic bamboo variety with striking black stems. Often used for ornamental purposes and furniture making.", "category": "Bamboo", "price": 900 }, { "id": 24, "image": "https://i.ibb.co/FL3c30KJ/giant-bamboo-min.jpg", "name": "Giant Bamboo", "description": "The tallest bamboo species, producing strong, thick stems. Useful for building materials and garden landscaping.", "category": "Bamboo", "price": 1200 }, { "id": 25, "image": "https://i.ibb.co/svtZJ7nw/money-plant-min.jpg", "name": "Money Plant", "description": "A popular indoor climber believed to bring prosperity. Thrives easily in soil or water with minimal care.", "category": "Climber", "price": 350 }, { "id": 26, "image": "https://i.ibb.co/Ngzp0tkJ/Bougainvillea-min.jpg", "name": "Bougainvillea", "description": "A vibrant flowering climber with pink, purple, or red blooms. Perfect for covering fences and garden walls.", "category": "Climber", "price": 400 }, { "id": 27, "image": "https://i.ibb.co/4ZrDBFHC/passion-flower-min.jpg", "name": "Passion Flower", "description": "An ornamental and medicinal climber with striking flowers. Known for attracting pollinators like bees and butterflies.", "category": "Climber", "price": 500 }, { "id": 28, "image": "https://i.ibb.co/VWNQPDMR/water-lily-min.jpg", "name": "Water Lily", "description": "A floating aquatic plant with large leaves and stunning blooms. Adds beauty to ponds while supporting aquatic life.", "category": "Aquatic Plant", "price": 300 }, { "id": 29, "image": "https://i.ibb.co/4g4J0Tkj/lotus-min.jpg", "name": "Lotus", "description": "A sacred aquatic plant with beautiful pink or white flowers. Symbolizes purity and grows in still, shallow water.", "category": "Aquatic Plant", "price": 450 }, { "id": 30, "image": "https://i.ibb.co/0jLycYdv/Water-Hyacinth-min.jpg", "name": "Water Hyacinth", "description": "A floating plant with violet flowers that provide shade to aquatic creatures. Known for rapid growth in ponds.", "category": "Aquatic Plant", "price": 250 } ];

  const categories = ["All", ...new Set(plants.map(p => p.category))];
  const categoryListEl = document.querySelector(".category-list");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const spinner = document.getElementById("spinner");
  const productGrid = document.getElementById("product-grid");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("cart-total");
  let cart = [];

  // Pagination variables
  let currentPage = 1;
  const productsPerPage = 9;
  let filteredProducts = plants; // keeps track of currently displayed products

  function renderProducts(productsToShow = filteredProducts, page = 1) {
    productGrid.innerHTML = "";
    spinner.style.display = "block";

    setTimeout(() => {
      const start = (page - 1) * productsPerPage;
      const end = start + productsPerPage;
      const pageProducts = productsToShow.slice(start, end);

      pageProducts.forEach(plant => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
          <div class="product-image">
            <img src="${plant.image}" alt="${plant.name}">
          </div>
          <div class="product-info">
            <div class="product-name">${plant.name}</div>
            <div class="product-description">${plant.description}</div>
            <div class="product-meta">
              <span class="product-tag">${plant.category}</span>
              <span class="product-price">${currency}${plant.price}</span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        `;

        const nameDiv = productDiv.querySelector(".product-name");
        nameDiv.addEventListener("click", () => openModal(plant.id));

        const addBtn = productDiv.querySelector(".add-to-cart");
        addBtn.addEventListener("click", () => addToCart(plant.id));

        productGrid.appendChild(productDiv);
      });

      spinner.style.display = "none";
      renderPagination(productsToShow, page);
    }, 300);
  }

  function renderPagination(productsToShow, page) {
    // Remove old pagination
    const oldPagination = document.querySelector(".pagination");
    if (oldPagination) oldPagination.remove();

    const totalPages = Math.ceil(productsToShow.length / productsPerPage);
    if (totalPages <= 1) return;

    const paginationDiv = document.createElement("div");
    paginationDiv.classList.add("pagination");

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === page) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        renderProducts(productsToShow, currentPage);
      });
      paginationDiv.appendChild(btn);
    }

    productGrid.parentNode.appendChild(paginationDiv);
  }

  function addToCart(id) {
    const product = plants.find(p => p.id === id);
    cart.push(product);
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const cartDiv = document.createElement("div");
      cartDiv.classList.add("cart-item");

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "✖";
      removeBtn.addEventListener("click", () => removeFromCart(index));

      cartDiv.innerHTML = `<span>${item.name} - ${currency}${item.price}</span>`;
      cartDiv.appendChild(removeBtn);

      cartItemsContainer.appendChild(cartDiv);
      total += item.price;
    });

    totalPriceEl.textContent = `${currency}${total}`;
  }

  function renderCategories() {
    categoryListEl.innerHTML = "";
    categories.forEach(category => {
      const div = document.createElement("div");
      div.classList.add("category-item");
      if (category === "All") div.classList.add("active");
      div.textContent = category;

      div.addEventListener("click", () => filterByCategory(category, div));
      categoryListEl.appendChild(div);
    });
  }

  function filterByCategory(category, btn) {
    document.querySelectorAll(".category-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentPage = 1; // reset to first page
    if (category === "All") {
      filteredProducts = plants;
    } else {
      filteredProducts = plants.filter(p => p.category === category);
    }

    renderProducts(filteredProducts, currentPage);
  }

  function openModal(id) {
    const plant = plants.find(p => p.id === id);
    modalBody.innerHTML = `
      <h2>${plant.name}</h2>
      <img src="${plant.image}" alt="${plant.name}" style="width:100%; max-height:300px; object-fit:cover;">
      <p>${plant.description}</p>
      <p>Category: ${plant.category}</p>
      <p>Price: ${currency}${plant.price}</p>
    `;
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  renderCategories();
  renderProducts();
});
