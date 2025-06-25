function loadPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelector(`.nav-item[onclick="loadPage('${page}')"]`).classList.add('active');

  if (page === 'dashboard') fetchStats();
  if (page === 'products') fetchProduct();
}

function previewImage(event) {
  const preview = document.getElementById('imagePreview');
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

function fetchStats() {
  fetch('http://localhost:3000/api/stats')
    .then(response => response.json())
    .then(data => {
      document.getElementById('totalProducts').textContent = data.totalProducts;
      document.getElementById('totalOrders').textContent = data.totalOrders;
      document.getElementById('todayRevenue').textContent = data.todayRevenue;
      document.getElementById('activeUsers').textContent = data.activeUsers;
    })
    .catch(error => console.error('Error fetching stats:', error));
}

function fetchProduct() {
  fetch('http://localhost:3000/api/products/1') // Assuming product ID 1 for simplicity
    .then(response => response.json())
    .then(data => {
      document.getElementById('productName').value = data.name;
      document.getElementById('productDescription').value = data.description;
      document.getElementById('productPrice').value = data.price;
      document.getElementById('productStock').value = data.stock;
      document.getElementById('productCategory').value = data.category;
      document.getElementById('imagePreview').src = data.image || '#';
      document.getElementById('imagePreview').style.display = data.image ? 'block' : 'none';
    })
    .catch(error => console.error('Error fetching product:', error));
}

document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const product = {
    name: formData.get('productName'),
    description: formData.get('productDescription'),
    price: formData.get('productPrice'),
    stock: formData.get('productStock'),
    category: formData.get('productCategory'),
    image: document.getElementById('imagePreview').src
  };

  fetch('http://localhost:3000/api/products/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  .then(response => response.json())
  .then(data => alert('Product updated successfully!'))
  .catch(error => console.error('Error updating product:', error));
});


// ഡാഷ്ബോർഡ് പ്രദർശിപ്പിക്കാൻ തുടങ്ങുക
window.onload = () => loadPage('dashboard');