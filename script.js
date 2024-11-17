// JavaScript to toggle the search panel visibility
document.getElementById('search-icon').addEventListener('click', function() {
  document.body.classList.add('search-active');  // Show search panel
});

function closeSearch() {
  document.body.classList.remove('search-active');  // Hide search panel
}

// Function to show suggestions dynamically based on input
function showSuggestions() {
  let searchBar = document.getElementById('search-bar');
  let suggestions = document.getElementById('suggestions');
  let query = searchBar.value.toLowerCase();

  // Example static suggestions, could be replaced with dynamic data
  const items = ['Shirt', 'Jeans', 'Jacket', 'Shoes', 'Hats', 'Sweaters'];

  // Clear previous suggestions
  suggestions.innerHTML = '';

  // Only show suggestions if there's something typed and it matches the items
  if (query.length > 0) {
    let filteredItems = items.filter(item => item.toLowerCase().includes(query));
    
    // If there are matching items, show them
    if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.textContent = item;
        suggestions.appendChild(div);
      });
    } else {
      // Show a message if no suggestions match
      let noResults = document.createElement('div');
      noResults.classList.add('suggestion-item');
      noResults.textContent = 'No suggestions found';
      suggestions.appendChild(noResults);
    }
  }
}

// Function to check if element is in view
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add animations when elements come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-animate');
  
  elements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('section-animate-visible');
    }
  });
}

// Call animateOnScroll when the page is scrolled
window.addEventListener('scroll', animateOnScroll);

// Initial call to trigger animations for elements already in view
window.addEventListener('load', animateOnScroll);



