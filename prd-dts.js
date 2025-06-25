function handleSearch() {
      const searchInput = document.querySelector('#search-input') || document.querySelector('#mobile-search-input');
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    }

    function changeImage(src) {
      const mainImage = document.getElementById('mainImage');
      mainImage.src = src;
      document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      event.target.classList.add('active');
    }

    function updateQuantity(change) {
      const quantity = document.getElementById('quantity');
      let value = parseInt(quantity.value) + change;
      if (value < 1) value = 1;
      quantity.value = value;
    }

    function toggleDetails() {
      const moreDetails = document.getElementById('moreDetails');
      moreDetails.style.display = moreDetails.style.display === 'block' ? 'none' : 'block';
    }

    function openTab(tabName) {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      document.querySelector(`.tab[onclick="openTab('${tabName}')"]`).classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    function toggleFavorite() {
      const favoriteBtn = document.getElementById('favoriteBtn');
      const isFavorite = favoriteBtn.classList.toggle('active');
      const heartIcon = favoriteBtn.querySelector('i');
      heartIcon.classList.toggle('far', !isFavorite);
      heartIcon.classList.toggle('fas', isFavorite);
      localStorage.setItem('favorite_nike_air', isFavorite);
    }

    function addToCart() {
      const quantity = document.getElementById('quantity').value;
      alert(`Added ${quantity} Nike Air Max 90 to cart!`);
    }

    function proceedToCheckout() {
      alert('Proceeding to Checkout...');
    }

    document.getElementById('mainImage').addEventListener('click', () => {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      modalImage.src = document.getElementById('mainImage').src;
      modal.style.display = 'block';
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
      document.getElementById('imageModal').style.display = 'none';
    });

    window.addEventListener('scroll', () => {
      const stickyBar = document.querySelector('.sticky-bar');
      if (window.scrollY > 300) {
        stickyBar.style.display = 'flex';
      } else {
        stickyBar.style.display = 'none';
      }
    });

    // Initialize favorite state
    if (localStorage.getItem('favorite_nike_air') === 'true') {
      toggleFavorite();
    }