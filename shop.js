    function handleSearch() {
      const searchInput = document.querySelector('#search-input') || document.querySelector('#mobile-search-input');
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    }