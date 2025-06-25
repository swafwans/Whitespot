 function handleSearch() {
      const searchInput = document.querySelector('#search-input') || document.querySelector('#mobile-search-input');
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    }

    function removeItem(button) {
      const row = button.closest('tr');
      if (row) {
        row.style.display = 'none';
        updateTotal();
      }
    }

    function proceedToCheckout() {
      alert('Proceeding to checkout...');
    }

    function updateTotal() {
      let total = 0;
      const rows = document.querySelectorAll('#cartTable tbody tr');
      rows.forEach(row => {
        if (row.style.display !== 'none') {
          const priceText = row.cells[3].textContent.replace('₹', '').replace(',', '');
          total += parseInt(priceText) || 0;
        }
      });
      document.querySelector('.total').textContent = `Total: ₹${total.toLocaleString()}`;
    }

    // Initial total update
    updateTotal();