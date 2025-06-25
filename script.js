 function handleSearch() {
      const searchInput = document.querySelector('#search-input') || document.querySelector('#mobile-search-input');
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    }

    function scrollSlider(listId, direction) {
      const list = document.getElementById(listId);
      if (list) {
        list.scrollBy({ left: direction, behavior: 'smooth' });
      }
    }